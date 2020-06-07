class Person < ApplicationRecord
  include Ownable
  include Contactable
  include Fieldable

  belongs_to :department, optional: true
  has_one :user
  has_many :item_assignments
  has_many :items, through: :item_assignments

  validates :contact, presence: true

  before_validation :ensure_associated_contact

  private

  def ensure_associated_contact
    build_contact unless contact
  end
end
