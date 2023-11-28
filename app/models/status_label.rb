class StatusLabel < ApplicationRecord
  slug :name

  tracked
  resourcify

  enum :status_type, %i(deployable pending undeployable archived)

  has_many :assets, dependent: :nullify
  has_many :items, dependent: :nullify
  has_many :accessories, dependent: :nullify
  has_many :components, dependent: :nullify
  has_many :licenses, dependent: :nullify

  validates :name, presence: true
end
