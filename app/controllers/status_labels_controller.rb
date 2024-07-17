class StatusLabelsController < ApplicationController

  expose :status_labels, -> { search(StatusLabel.all, sortable_fields) }
  expose :status_label, id: ->{ params[:slug] }, find_by: :slug

  # @route GET /status_labels (status_labels)
  def index
    paginated_status_labels = status_labels.page(params[:page] || 1).per(current_user.limit(:status_labels))

    render inertia: "StatusLabels/Index", props: {
      status_labels: paginated_status_labels.render,
      pagination: -> { {
        count: status_labels.count,
        **pagination_data(paginated_status_labels)
      } }
    }
  end

  # @route GET /status_labels/:slug (status_label)
  def show
    if status_label.nil?
      render inertia: "Error", props: { status: 404 }
    else
      render inertia: "StatusLabels/Show", props: {
        status_label: -> { status_label.render }
      }
    end
  end

  # @route GET /status_labels/new (new_status_label)
  def new
    render inertia: "StatusLabels/New", props: {
      status_label: StatusLabel.new.render(view: :form_data)
    }
  end

  # @route GET /status_labels/:slug/edit (edit_status_label)
  def edit
    render inertia: "StatusLabels/Edit", props: {
      status_label: -> { status_label.render(view: :edit) }
    }
  end

  # @route POST /status_labels (status_labels)
  def create
    status_label = StatusLabel.new(status_label_params)
    if status_label.save
      redirect_to status_label, notice: 'StatusLabel was successfully created.'
    else
      redirect_to new_status_label_path, inertia: { errors: status_label.errors }
    end
  end

  # @route PATCH /status_labels/:slug (status_label)
  # @route PUT /status_labels/:slug (status_label)
  def update
    if status_label.update(status_label_params)
      redirect_to status_label, notice: 'StatusLabel was successfully updated.'
    else
      redirect_to edit_status_label_path, inertia: { errors: status_label.errors }
    end
  end

  # @route DELETE /status_labels/:slug (status_label)
  def destroy
    status_label.destroy
    respond_to do |format|
      format.html { redirect_to status_labels_url, notice: 'StatusLabel was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def sortable_fields
    %w(name status_type assets.count).freeze
  end

  def status_label_params
    params.require(:status_label).permit(:name)
  end
end
