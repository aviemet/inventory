# == Schema Information
#
# Table name: people
#
#  id              :bigint           not null, primary key
#  active          :boolean          default(TRUE), not null
#  employee_number :string
#  first_name      :string
#  guid            :string
#  job_title       :string
#  last_name       :string
#  middle_name     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  location_id     :bigint
#  manager_id      :bigint
#  user_id         :bigint
#
# Indexes
#
#  index_people_on_guid         (guid) UNIQUE
#  index_people_on_location_id  (location_id)
#  index_people_on_manager_id   (manager_id)
#  index_people_on_user_id      (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (location_id => locations.id)
#  fk_rails_...  (manager_id => people.id)
#  fk_rails_...  (user_id => users.id)
#
require 'rails_helper'
require 'models/concerns/ownable'
require 'models/concerns/contactable'
require 'models/concerns/assign_toable'
require 'models/concerns/fieldable'
require "models/concerns/serializable"

RSpec.describe Person do
  subject(:person) { create(:person) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(build(:person)).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:person, {
        first_name: nil
      },)).not_to be_valid

      expect(build(:person, {
        last_name: nil
      },)).not_to be_valid
    end
  end

  describe "Associations" do
    it_behaves_like "ownable"
    it_behaves_like "contactable"
    it_behaves_like "assign_toable"
    it_behaves_like "fieldable"

    it { is_expected.to belong_to(:user).optional }
    it { is_expected.to belong_to(:manager).class_name('Person').optional }
    it { is_expected.to belong_to(:location).optional }
    it { is_expected.to have_many(:tickets) }
    it { is_expected.to have_many(:groups) }

    it "returns a value for default_location" do
      person = build(:person)
      person.location = nil

      expect(person.default_location).to be_nil

      person.department = build(:department)
      expect(person.default_location).to be(person.department.location)

      person.location = build(:location)
      expect(person.default_location).to be(person.location)
      expect(person.default_location).not_to be(person.department.location)
    end
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
