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

  def index?
    true
  end

  def show?
    false
  end

  def create?
    false
  end

  def new?
    create?
  end

  def update?
    false
  end

  def edit?
    update?
  end

  def destroy?
    false
  end
end
