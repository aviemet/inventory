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
FactoryBot.define do
  factory :assignment do
    active { true }
    qty { Faker::Number.digit }
    assigned_at { Time.current }

    transient do
      assignable { nil }
      assign_toable { nil }
    end

    assignable_id { assignable&.id }
    assignable_type { assignable&.class&.name&.camelize }

    assign_toable_id { assign_toable&.id }
    assign_toable_type { assign_toable&.class&.name&.camelize }
  end
end
