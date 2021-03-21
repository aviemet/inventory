# frozen_string_literal: true

class SelectOptionsReflex < ApplicationReflex
  def options(selector, data, value)
    raise "Method \"#{data}\" is not defined in SelectOptionsReflex" if !self.respond_to?(data) # This should probably error

    data = self.send(data)
    morph "##{selector}", render(Forms::SelectOptions::SelectOptionsComponent.new(data: data, value: value), layout: false)
  end

  def vendors
    Vendor.all
  end

  def models
    Model.all
  end

  def locations
    Location.all
  end

end
