class UserPolicy < ApplicationPolicy
  class Scope < Scope
  end

  def update_table_preferences?
    standard_authorized?(:update)
  end

  def update_user_preferences?
    standard_authorized?(:update)
  end
end
