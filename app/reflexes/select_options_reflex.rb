# frozen_string_literal: true

class SelectOptionsReflex < ApplicationReflex
  def options(selector, data, value)
    raise "Method \"#{data}\" is not defined in SelectOptionsReflex" if !self.respond_to?(data) # This should probably error

    data = self.send(data)
    morph "##{selector}", render(Forms::SelectOptions::SelectOptionsComponent.new(data: data, value: value), layout: false)
  end

  # TODO: scope these queries to the active company and current user permissions
  def vendors
    Vendor.all
  end

  def models
    Model.all
  end

  def locations
    Location.all
  end

  def people
    Person.all
  end

  def items
    Item.all
  end

end
