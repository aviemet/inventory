class Audited::AuditDecorator < ApplicationDecorator
  delegate_all

  def details
    self.action == "create" ? create_message : update_message
  end

  private

  def create_message
    "Created at #{I18n.l(self.created_at, format: :short)}"
  end

  def update_message
    "Updated at #{I18n.l(self.created_at, format: :short)} #{person}"
  end

  def person
    self.user.nil? ? "" : "by #{helpers.link_to(self.user.person)}"
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
