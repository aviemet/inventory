class CompanyPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if user.has_role? :super_admin
        scope.all
      else
        scope.with_role(:admin, user)
      end
    end
  end
end
