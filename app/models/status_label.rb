class StatusLabel < ApplicationRecord
  slug :name

  tracked

  enum :status_type, %i(deployable pending undeployable archived)

  has_many :assets
  has_many :items
  has_many :accessories
  has_many :components
  has_many :licenses
end
