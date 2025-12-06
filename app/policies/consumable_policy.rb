class ConsumablePolicy < ApplicationPolicy
  class Scope < Scope
  end

  def checkout?
    standard_authorized?(:checkout)
  end
end
