class Api::StatusLabelsController < ApplicationController
  expose :status_label, -> { @active_company.status_labels.find_by_slug(params[:slug]) || StatusLabel.new(status_label_params) }

  # POST /api/status_labels
  def create
    status_label.company = @active_company

    if status_label.save
      render json: StatusLabelBlueprint.render_as_json(status_label), status: 201
    else
      render json: { errors: status_label.errors }, status: 303
    end
  end

  # PATCH/PUT /api/status_labels/:id
  def update
    if status_label.update(status_label_params)
      render json: StatusLabelBlueprint.render_as_json(status_label), status: 201
    else
      render json: { errors: status_label.errors }, status: 303
    end
  end

  private

  def status_label_params
    params.require(:status_label).permit(:name)
  end
end
