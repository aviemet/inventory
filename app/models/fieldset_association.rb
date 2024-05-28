# == Schema Information
#
# Table name: fieldset_associations
#
#  id             :bigint           not null, primary key
#  fieldable_type :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  fieldable_id   :bigint           not null
#  fieldset_id    :bigint           not null
#
# Indexes
#
#  index_fieldset_associations_on_fieldable_type_and_fieldable_id  (fieldable_type,fieldable_id)
#  index_fieldset_associations_on_fieldset_id                      (fieldset_id)
#
# Foreign Keys
#
#  fk_rails_...  (fieldset_id => fieldsets.id)
#
class FieldsetAssociation < ApplicationRecord
  tracked
  resourcify

  belongs_to :fieldset
  belongs_to :fieldable, polymorphic: true
end
