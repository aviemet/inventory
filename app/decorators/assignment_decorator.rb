class AssignmentDecorator < ApplicationDecorator
  delegate_all

  def dates_string
    "#{I18n.l(assignment.assigned_at, format: :short)} &rarr; #{self.returned_at.nil? ? 'present' : I18n.l(assignment.returned_at, format: :short)}"
  end

  # Define presentation-specific methods here. Helpers are accessed through
  # `helpers` (aka `h`). You can override attributes, for example:
  #
  #   def created_at
  #     helpers.content_tag :span, class: 'time' do
  #       object.created_at.strftime("%a %m/%d/%y")
  #     end
  #   end

end
