module Contactable
  extend ActiveSupport::Concern

  included do
    has_one :contact, as: :contactable, dependent: :destroy
    has_many :addresses, through: :contact
    has_many :phones, through: :contact
    has_many :emails, through: :contact
    has_many :websites, through: :contact

    accepts_nested_attributes_for :contact, :addresses, :phones, :emails, :websites
  end
end
