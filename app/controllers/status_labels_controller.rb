class StatusLabelsController < ApplicationController
  include Searchable

  expose :status_labels, -> { search(StatusLabel.all, sortable_fields) }
  expose :status_label, -> { StatusLabel.find_by_slug(params[:slug]) }

  # GET /status_labels
  # GET /status_labels.json
  def index
    paginated_status_labels = status_labels.page(params[:page] || 1)

    render inertia: "StatusLabels/Index", props: {
      status_labels: paginated_status_labels.render,
      pagination: -> { {
        count: status_labels.count,
        **pagination_data(paginated_status_labels)
      } }
    }
  end

  # GET /status_labels/:slug
  def show
    if status_label.nil?
      render inertia: "Error", props: { status: 404 }
    else
      render inertia: "StatusLabels/Show", props: {
        status_label: -> { status_label.render }
      }
    end
  end

  # GET /status_labels/new
  def new
    render inertia: "StatusLabels/New", props: {
      status_label: Company.new.render(view: :new)
    }
  end

  # GET /status_labels/:slug/edit
  def edit
    render inertia: "StatusLabels/Edit", props: {
      status_label: -> { status_label.render(view: :edit) }
    }
  end

  # POST /status_labels
  def create
    if Company.new(status_label_params).save
      # Assign admin permissions to user creating the record
      current_user.add_role :admin, status_label
      current_user.update(active_status_label: status_label)

      redirect_to status_label, notice: 'Company was successfully created.'
    else
      redirect_to new_status_label_path, inertia: { errors: status_label.errors }
    end
  end

  # PATCH/PUT /status_labels/:slug
  def update
    if status_label.update(status_label_params)
      redirect_to status_label, notice: 'Company was successfully updated.'
    else
      redirect_to edit_status_label_path, inertia: { errors: status_label.errors }
    end
  end

  # DELETE /status_labels/:slug
  def destroy
    status_label.destroy
    respond_to do |format|
      format.html { redirect_to status_labels_url, notice: 'Company was successfully destroyed.' }
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
