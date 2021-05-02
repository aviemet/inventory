class License < ApplicationRecord
  include Ownable
  include Assignable::Consume
  include Purchasable
  include Fieldable

  resourcify

  monetize :cost_cents

  belongs_to :category
  belongs_to :vendor
  belongs_to :manufacturer

  validates_presence_of :name

  alias_attribute :qty, :seats
end
