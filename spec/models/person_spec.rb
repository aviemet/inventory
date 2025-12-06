# == Schema Information
#
# Table name: people
#
#  id              :bigint           not null, primary key
#  active          :boolean          default(TRUE), not null
#  employee_number :string
#  first_name      :string           not null
#  guid            :string
#  job_title       :string
#  last_name       :string           not null
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
require "rails_helper"
require "models/concerns/ownable"
require "models/concerns/contactable"
require "models/concerns/assign_toable"
require "models/concerns/fieldable"
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
    it { is_expected.to belong_to(:manager).class_name("Person").optional }
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

  describe "#has_role_with_groups?" do
    let(:company) { create(:company) }
    let(:person) { create(:person, company: company) }
    let(:group) { create(:person_group, company: company) }

    context "when person has the role directly" do
      it "returns true even if groups don't have the role" do
        person.add_role(:index, Item)
        expect(person.has_role_with_groups?(:index, Item)).to be true
      end

      it "works for different resource types" do
        person.add_role(:create, Accessory)
        expect(person.has_role_with_groups?(:create, Accessory)).to be true
      end

      it "returns false when checking different action" do
        person.add_role(:index, Item)
        expect(person.has_role_with_groups?(:create, Item)).to be false
      end

      it "returns false when checking different resource" do
        person.add_role(:index, Item)
        expect(person.has_role_with_groups?(:index, Accessory)).to be false
      end
    end

    context "when person has the role through a group" do
      it "returns true when a group has the role" do
        PersonGroupAssignment.create!(person: person, person_group: group)
        group.add_role(:index, Item)

        expect(person.has_role_with_groups?(:index, Item)).to be true
      end

      it "returns true when multiple groups exist and one has the role" do
        group2 = create(:person_group, company: company)
        PersonGroupAssignment.create!(person: person, person_group: group)
        PersonGroupAssignment.create!(person: person, person_group: group2)

        group2.add_role(:index, Item)

        expect(person.has_role_with_groups?(:index, Item)).to be true
      end

      it "returns true when multiple groups have the same role" do
        group2 = create(:person_group, company: company)
        PersonGroupAssignment.create!(person: person, person_group: group)
        PersonGroupAssignment.create!(person: person, person_group: group2)

        group.add_role(:index, Item)
        group2.add_role(:index, Item)

        expect(person.has_role_with_groups?(:index, Item)).to be true
      end

      it "returns false when person is in group but group doesn't have the role" do
        PersonGroupAssignment.create!(person: person, person_group: group)
        group.add_role(:show, Item)

        expect(person.has_role_with_groups?(:index, Item)).to be false
      end

      it "returns false when group has role for different resource" do
        PersonGroupAssignment.create!(person: person, person_group: group)
        group.add_role(:index, Accessory)

        expect(person.has_role_with_groups?(:index, Item)).to be false
      end

      it "works for different actions" do
        PersonGroupAssignment.create!(person: person, person_group: group)
        group.add_role(:create, Item)
        group.add_role(:update, Item)

        expect(person.has_role_with_groups?(:create, Item)).to be true
        expect(person.has_role_with_groups?(:update, Item)).to be true
        expect(person.has_role_with_groups?(:delete, Item)).to be false
      end

      it "works for company admin role" do
        PersonGroupAssignment.create!(person: person, person_group: group)
        group.add_role(:admin, Company)

        expect(person.has_role_with_groups?(:admin, Company)).to be true
      end
    end

    context "when person has no roles and no groups" do
      it "returns false" do
        expect(person.has_role_with_groups?(:index, Item)).to be false
      end
    end

    context "when person is in groups but groups have no roles" do
      it "returns false" do
        PersonGroupAssignment.create!(person: person, person_group: group)

        expect(person.has_role_with_groups?(:index, Item)).to be false
      end
    end

    context "when checking role with nil resource" do
      it "checks roles without resource scoping" do
        PersonGroupAssignment.create!(person: person, person_group: group)
        group.add_role(:super_user)

        expect(person.has_role_with_groups?(:super_user, nil)).to be true
      end
    end

    context "when person has role directly AND through group" do
      it "returns true (direct role takes precedence)" do
        PersonGroupAssignment.create!(person: person, person_group: group)
        person.add_role(:index, Item)
        group.add_role(:index, Item)

        expect(person.has_role_with_groups?(:index, Item)).to be true
      end

      it "returns true even if group role is different action" do
        PersonGroupAssignment.create!(person: person, person_group: group)
        person.add_role(:index, Item)
        group.add_role(:create, Item)

        expect(person.has_role_with_groups?(:index, Item)).to be true
      end
    end

    context "with company-scoped groups" do
      it "only checks groups in the person's company" do
        other_company = create(:company)
        other_group = create(:person_group, company: other_company)
        PersonGroupAssignment.create!(person: person, person_group: group)
        other_group.add_role(:index, Item)

        expect(person.has_role_with_groups?(:index, Item)).to be false
      end
    end
  end
end
