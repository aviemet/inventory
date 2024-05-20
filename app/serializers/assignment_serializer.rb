# == Schema Information
#
# Table name: assignments
#
#  id                 :bigint           not null, primary key
#  active             :boolean          default(TRUE), not null
#  assign_toable_type :string           not null
#  assignable_type    :string           not null
#  assigned_at        :datetime
#  expected_at        :datetime
#  notes              :text
#  qty                :integer          default(1)
#  returned_at        :datetime
#  status             :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  assign_toable_id   :bigint           not null
#  assignable_id      :bigint           not null
#  created_by_id      :bigint
#  location_id        :bigint           not null
#
# Indexes
#
#  index_assignments_on_assign_toable_type_and_assign_toable_id  (assign_toable_type,assign_toable_id)
#  index_assignments_on_assignable_type_and_assignable_id        (assignable_type,assignable_id)
#  index_assignments_on_created_by_id                            (created_by_id)
#  index_assignments_on_location_id                              (location_id)
#
# Foreign Keys
#
#  fk_rails_...  (created_by_id => users.id)
#  fk_rails_...  (location_id => locations.id)
#
class AssignmentSerializer < ApplicationSerializer

  attributes(
    :assignable_id,
    :assign_toable_id,
    :qty,
    :status,
    :location_id,
    :assigned_at,
    :returned_at,
    :expected_at,
    :notes,
    :active,
    :created_by_id,
    :created_at,
    :updated_at,
    assign_toable_type: { type: :AssignToableTypes },
    assignable_type: { type: :AssignableTypes },
  )

  belongs_to :assign_toable, serializer: AssignToableSerializer
  belongs_to :assignable, serializer: AssignableSerializer
end
