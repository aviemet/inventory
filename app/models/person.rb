class Person < ApplicationRecord
  include Contactable
  include Ownable

  belongs_to :department, optional: true
  has_one :user
  has_many :items_assignments
  has_many :items, through: :items_assignments

  validates :contact, presence: true

  before_validation :ensure_associated_contact

  private

  def ensure_associated_contact
    self.build_contact unless self.contact
  end

end
