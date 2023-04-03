class ComponentPolicy < ApplicationPolicy
  class Scope < Scope
  end

  def checkout?
    standard_auth(:checkout)
  end
  
  def checkin?
    standard_auth(:checkin)
  end
end
