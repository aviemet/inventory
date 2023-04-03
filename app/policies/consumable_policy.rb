class ConsumablePolicy < ApplicationPolicy
  class Scope < Scope
  end

  def checkout?
    standard_auth(:checkout)
  end
end
