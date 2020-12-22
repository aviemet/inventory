class License < ApplicationRecord
  include Ownable
  include Assignable
  include Purchasable
  include Fieldable

  resourcify

  monetize :cost_cents

  belongs_to :category
  belongs_to :vendor
  belongs_to :manufacturer

  validates_presence_of :name

  def self.dropdown_display
    "name"
  end
end
