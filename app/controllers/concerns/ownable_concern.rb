module OwnableConcern
  extend ActiveSupport::Concern

  def company_params
    params.require(:company).permit(:id)
  end
end
