# frozen_string_literal: true

class Alert::AlertComponent < ApplicationComponent
  def initialize(type: :alert, index: 0, position: nil, auto_hide: true)
    raise "Alert type must be one of \"notice\", \"info\", \"alert\", \"error\"; \"#{type}\" given." if !%w(notice info alert error).include?(type.to_s)

    raise "Alert position must be one of \"header\", \"footer\", \"toast\". \"#{position}\" given." if !position.nil? && !%w(header footer toast).include?(position.to_s)

    @type = type
    @index = index
    @position = position
    @auto_hide = auto_hide
  end
end
