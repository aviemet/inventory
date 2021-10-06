class AssignmentDecorator < ApplicationDecorator
  delegate_all

  def dates_string
    "#{I18n.l(assignment.assigned_at, format: :short)} &rarr; #{self.returned_at.nil? ? 'present' : I18n.l(assignment.returned_at, format: :short)}"
  end
end
