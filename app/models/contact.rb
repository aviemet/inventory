class Contact < ApplicationRecord
  tracked
  resourcify

  has_many :addresses, dependent: :delete_all
  has_many :emails, dependent: :delete_all
  has_many :phones, dependent: :delete_all
  has_many :websites, dependent: :delete_all

  belongs_to :contactable, polymorphic: true

  accepts_nested_attributes_for :emails, reject_if: ->(attributes){ attributes['email'].blank? }, allow_destroy: true
  accepts_nested_attributes_for :addresses, reject_if: ->(attributes){ attributes['address'].blank? }, allow_destroy: true
  accepts_nested_attributes_for :phones, reject_if: ->(attributes){ attributes['number'].blank? }, allow_destroy: true
  accepts_nested_attributes_for :websites, reject_if: ->(attributes){ attributes['url'].blank? }, allow_destroy: true
end
