class ComponentPolicy < ApplicationPolicy
  class Scope < Scope
  end

  def checkout?
    standard_authorized?(:checkout)
  end

  def checkin?
    standard_authorized?(:checkin)
  end
end
