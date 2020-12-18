# frozen_string_literal: true

class IconComponent < ViewComponent::Base
  def initialize(icon)
    @icon_name = icon
  end

  def before_render
    @icon = helpers.mi.public_send(@icon_name)
  end
end
