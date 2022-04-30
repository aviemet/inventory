module OwnableConcern
  extend ActiveSupport::Concern

  def company_params
    params.permit(:company).permit(:id)
  end
end
