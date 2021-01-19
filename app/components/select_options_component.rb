# frozen_string_literal: true

class SelectOptionsComponent < ApplicationComponent
  def initialize(data: nil, value: nil)
    @data = if data.is_a? String
              []
            elsif active_record_collection?(data)
              data.map{ |r| [r.to_s, r.id] }
            else
              data
            end
    @value = value
  end

  def active_record_collection?(data)
    return false if data.nil?

    data.any?{ |m| m.is_a? ActiveRecord::Base }
  end
end
