# == Schema Information
#
# Table name: person_groups
#
#  id          :bigint           not null, primary key
#  description :text
#  name        :string           not null
#  slug        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_person_groups_on_slug  (slug) UNIQUE
#
require "rails_helper"
require "models/concerns/serializable"

RSpec.describe PersonGroup do
  let(:company) { create(:company) }
  let(:person_group) { create(:person_group, company: company) }

  describe "Serializer" do
    it_behaves_like "serializable"
  end

  describe "#set_permissions" do
    context "when setting permissions for company" do
      it "creates roles with Company as resource type" do
        permissions = {
          "company" => { "admin" => true }
        }

        person_group.set_permissions(permissions)

        role = person_group.roles.find_by(name: "admin")
        expect(role).to be_present
        expect(role.resource_type).to eq("Company")
      end

      it "removes role when permission is false" do
        person_group.add_role(:admin, Company)

        permissions = {
          "company" => { "admin" => false }
        }

        person_group.set_permissions(permissions)

        role = person_group.roles.find_by(name: "admin")
        expect(role).to be_nil
      end
    end

    context "when setting permissions for Item" do
      it "creates roles with Item as resource type" do
        permissions = {
          "item" => { "index" => true, "create" => true }
        }

        person_group.set_permissions(permissions)

        index_role = person_group.roles.find_by(name: "index")
        create_role = person_group.roles.find_by(name: "create")

        expect(index_role).to be_present
        expect(index_role.resource_type).to eq("Item")
        expect(create_role).to be_present
        expect(create_role.resource_type).to eq("Item")
      end

      it "does not create roles with Company as resource type" do
        permissions = {
          "item" => { "index" => true }
        }

        person_group.set_permissions(permissions)

        role = person_group.roles.find_by(name: "index", resource_type: "Item")
        expect(role).to be_present

        company_role = person_group.roles.find_by(name: "index", resource_type: "Company")
        expect(company_role).to be_nil
      end
    end

    context "when setting permissions for multiple resource types" do
      it "creates roles with correct resource types for each" do
        permissions = {
          "item" => { "index" => true, "show" => true },
          "accessory" => { "create" => true, "update" => true },
          "company" => { "admin" => true }
        }

        person_group.set_permissions(permissions)

        item_index = person_group.roles.find_by(name: "index", resource_type: "Item")
        item_show = person_group.roles.find_by(name: "show", resource_type: "Item")
        accessory_create = person_group.roles.find_by(name: "create", resource_type: "Accessory")
        accessory_update = person_group.roles.find_by(name: "update", resource_type: "Accessory")
        company_admin = person_group.roles.find_by(name: "admin", resource_type: "Company")

        expect(item_index).to be_present
        expect(item_show).to be_present
        expect(accessory_create).to be_present
        expect(accessory_update).to be_present
        expect(company_admin).to be_present
      end
    end

    context "when removing existing permissions" do
      before do
        person_group.add_role(:index, Item)
        person_group.add_role(:create, Item)
        person_group.add_role(:show, Item)
      end

      it "removes only the specified permissions" do
        permissions = {
          "item" => {
            "index" => false,
            "create" => true,
            "show" => true
          }
        }

        person_group.set_permissions(permissions)

        expect(person_group.has_role?(:index, Item)).to be false
        expect(person_group.has_role?(:create, Item)).to be true
        expect(person_group.has_role?(:show, Item)).to be true
      end
    end

    context "when permissions hash is nil" do
      it "does not raise an error" do
        expect { person_group.set_permissions(nil) }.not_to raise_error
      end
    end

    context "when permissions hash is empty" do
      it "does not raise an error" do
        expect { person_group.set_permissions({}) }.not_to raise_error
      end
    end

    context "when setting permissions with checkout/checkin actions" do
      it "creates roles for checkout action" do
        permissions = {
          "item" => { "checkout" => true }
        }

        person_group.set_permissions(permissions)

        role = person_group.roles.find_by(name: "checkout", resource_type: "Item")
        expect(role).to be_present
      end

      it "creates roles for checkin action" do
        permissions = {
          "item" => { "checkin" => true }
        }

        person_group.set_permissions(permissions)

        role = person_group.roles.find_by(name: "checkin", resource_type: "Item")
        expect(role).to be_present
      end
    end

    context "when updating permissions multiple times" do
      it "correctly updates roles without duplicates" do
        permissions1 = {
          "item" => { "index" => true, "show" => true }
        }
        person_group.set_permissions(permissions1)

        permissions2 = {
          "item" => { "index" => true, "create" => true }
        }
        person_group.set_permissions(permissions2)

        expect(person_group.has_role?(:index, Item)).to be true
        expect(person_group.has_role?(:show, Item)).to be true
        expect(person_group.has_role?(:create, Item)).to be true

        index_roles = person_group.roles.where(name: "index", resource_type: "Item")
        expect(index_roles.count).to eq(1)
      end
    end
  end
end
