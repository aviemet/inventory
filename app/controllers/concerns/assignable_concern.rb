module AssignableConcern
  extend ActiveSupport::Concern

  included do
    # before_action :redirect_assigned_asset, only: [:checkout]
    # before_action :redirect_unassigned_asset, only: [:checkin]

    # def redirect_assigned_asset
    #   redirect_to(assignable, warning: "Asset is already assigned, must be checked back in before it can be assigned again.") if assignable.assigned?
    # end

    # def redirect_unassigned_asset
    #   redirect_to(assignable, warning: "Asset is not checked out.") unless assignable.assigned?
    # end

    # private

    # def assignable = params[:asset_type].camelize.constantize.find(params[:id])

  end
end
