# frozen_string_literal: true

class SelectOptionsReflex < ApplicationReflex
  def options(selector, data, value)
    model, *args = data.split('#')
    raise "Method \"#{model}\" is not defined in SelectOptionsReflex" if !self.respond_to?(model)

    ap({data: data, model: model, args: args, value: value})
    response = self.send(model, *args)
    morph "##{selector}", render(Forms::SelectOptions::SelectOptionsComponent.new(data: response, value: value), layout: false)
  end

  def companies(*_args)
    current_user&.companies&.all
  end

  def departments(*_args)
    current_user&.active_company&.departments&.all
  end

  def locations(*_args)
    current_user&.active_company&.locations&.all
  end

  def people(*_args)
    current_user&.active_company&.people&.all
  end

  def items(*_args)
    current_user&.active_company&.items&.all
  end

  def accessories(*_args)
    current_user&.active_company&.accessories&.all
  end

  def consumables(*_args)
    current_user&.active_company&.consumables&.all
  end

  def licenses(*_args)
    current_user&.active_company&.licenses&.all
  end

  def vendors(*_args)
    current_user&.active_company&.vendors&.all
  end

  def models(*_args)
    Model.all
  end

  def manufacturers(*_args)
    current_user&.active_company&.manufacturers&.all
  end

  def categories(*args)
    if !args.empty?
      Category.find_by_type(args[0])
    else
      Category.all
    end
  end

  def purchases(*_args)
    current_user&.active_company&.purchases&.all
  end
end
