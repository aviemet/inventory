class Person < ApplicationRecord
  include Ownable
  include Contactable
  include Assignable
  include Fieldable

  belongs_to :department, optional: true
  belongs_to :manager, class_name: 'Person', optional: true
  has_one :user
  # has_many :items_assignments
  has_many :items, through: :items_assignments

  before_validation :ensure_associated_contact

  private

  def ensure_associated_contact
    build_contact unless contact
  end
end
