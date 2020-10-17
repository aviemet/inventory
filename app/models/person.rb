class Person < ApplicationRecord
  include Ownable
  include Contactable
  include AssignToable
  include Fieldable

  belongs_to :manager, class_name: 'Person', optional: true
  has_one :user

  before_validation :ensure_associated_contact

  validates_presence_of :first_name
  validates_presence_of :last_name

  private

  def ensure_associated_contact
    build_contact unless contact
  end
end
