# frozen_string_literal: true

class Forms::AssignToableInputs::AssignToableInputsComponent < ApplicationComponent
  attr_reader :form, :company, :asset_types

  def initialize(form:, company:, except: [], only: [])
    if except.any? && only.any?
      raise ArgumentError, "You can only pass one of: except, only"
    end

    except = except.kind_of?(Array) ? except : [except]
    only = only.kind_of?(Array) ? only : [only]

    @form = form
    @company = company
    @asset_types = if only.any?
      only
    else
      [:person, :item, :location] - except
    end
  end
end
