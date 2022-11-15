class StatusLabel < ApplicationRecord
  slug :name

  tracked

  enum :status_type, %i(deployable pending undeployable archived)
end
