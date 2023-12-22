class Api::StatusLabelsController < Api::ApiController
  expose :status_label, id: ->{ params[:slug] }, scope: ->{ @active_company.status_labels.includes_associated }, find_by: :slug

  # POST /api/status_labels
  def create
    status_label.company = @active_company

    if status_label.save
      render json: status_label.render, status: :created
    else
      render json: { errors: status_label.errors }, status: :see_other
    end
  end

  # PATCH/PUT /api/status_labels/:id
  def update
    if status_label.update(status_label_params)
      render json: status_label.render, status: :created
    else
      render json: { errors: status_label.errors }, status: :see_other
    end
  end

  private

  def status_label_params
    params.require(:status_label).permit(:name)
  end
end
