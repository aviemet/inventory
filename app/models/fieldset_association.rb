class FieldsetAssociation < ApplicationRecord
  audited

  belongs_to :fieldset
  belongs_to :fieldable, polymorphic: true
end
