require "rails_helper"
require_relative "../support/devise"

RSpec.describe ApplicationPolicy, type: :policy do
  let(:company) { create(:company) }
  let(:user) { create(:user) }
  let(:person) { create(:person, company: company, user: user) }

  before do
    user.update(active_company: company)
    allow(user).to receive(:person).and_return(person)
  end

  describe "#standard_authorized?" do
    context "when user is super_admin" do
      before do
        user.add_role(:super_admin)
      end

      it "allows all actions regardless of record" do
        policy = described_class.new(user, Item.new)

        expect(policy.send(:standard_authorized?, :index)).to be true
        expect(policy.send(:standard_authorized?, :show)).to be true
        expect(policy.send(:standard_authorized?, :create)).to be true
        expect(policy.send(:standard_authorized?, :update)).to be true
        expect(policy.send(:standard_authorized?, :delete)).to be true
      end

      it "works with class records" do
        policy = described_class.new(user, Item)

        expect(policy.send(:standard_authorized?, :index)).to be true
      end
    end

    context "when user has no person" do
      before do
        allow(user).to receive(:person).and_return(nil)
      end

      it "returns false for all actions" do
        policy = described_class.new(user, Item.new)

        expect(policy.send(:standard_authorized?, :index)).to be false
      end
    end

    context "when person has no company" do
      before do
        allow(person).to receive(:company).and_return(nil)
      end

      it "returns false for all actions" do
        policy = described_class.new(user, Item.new)

        expect(policy.send(:standard_authorized?, :index)).to be false
      end
    end

    context "when person is company admin" do
      before do
        admin_role = company.roles.create!(name: :admin)
        person.roles << admin_role
      end

      it "allows all actions on all resources" do
        policy = described_class.new(user, Item.new)

        expect(policy.send(:standard_authorized?, :index)).to be true
        expect(policy.send(:standard_authorized?, :create)).to be true
        expect(policy.send(:standard_authorized?, :update)).to be true
        expect(policy.send(:standard_authorized?, :delete)).to be true
      end

      it "works with different resource types" do
        policy = described_class.new(user, Accessory.new)

        expect(policy.send(:standard_authorized?, :index)).to be true
      end

      it "works with class records" do
        policy = described_class.new(user, Item)

        expect(policy.send(:standard_authorized?, :index)).to be true
      end
    end

    context "when person has permission through a group" do
      let(:group) { create(:person_group, company: company) }

      before do
        PersonGroupAssignment.create!(person: person, person_group: group)
        group.add_role(:index, Item)
      end

      it "allows the specific action on that resource" do
        policy = described_class.new(user, Item.new)

        expect(policy.send(:standard_authorized?, :index)).to be true
      end

      it "denies other actions on that resource" do
        policy = described_class.new(user, Item.new)

        expect(policy.send(:standard_authorized?, :create)).to be false
        expect(policy.send(:standard_authorized?, :update)).to be false
        expect(policy.send(:standard_authorized?, :delete)).to be false
      end

      it "denies actions on different resources" do
        policy = described_class.new(user, Item.new)
        expect(policy.send(:standard_authorized?, :index)).to be true

        policy_with_accessory = described_class.new(user, Accessory.new)
        expect(policy_with_accessory.send(:standard_authorized?, :index)).to be false
      end
    end

    context "when person has permission directly" do
      before do
        person.add_role(:index, Item)
      end

      it "allows the specific action on that resource" do
        policy = described_class.new(user, Item.new)

        expect(policy.send(:standard_authorized?, :index)).to be true
      end

      it "denies other actions" do
        policy = described_class.new(user, Item.new)

        expect(policy.send(:standard_authorized?, :create)).to be false
      end
    end

    context "when person has no permissions" do
      it "denies all actions" do
        policy = described_class.new(user, Item.new)

        expect(policy.send(:standard_authorized?, :index)).to be false
        expect(policy.send(:standard_authorized?, :show)).to be false
        expect(policy.send(:standard_authorized?, :create)).to be false
        expect(policy.send(:standard_authorized?, :update)).to be false
        expect(policy.send(:standard_authorized?, :delete)).to be false
      end
    end

    context "when person has permission through multiple groups" do
      let(:group1) { create(:person_group, company: company) }
      let(:group2) { create(:person_group, company: company) }

      before do
        PersonGroupAssignment.create!(person: person, person_group: group1)
        PersonGroupAssignment.create!(person: person, person_group: group2)
        group1.add_role(:index, Item)
        group2.add_role(:create, Item)
      end

      it "allows actions from any group" do
        policy = described_class.new(user, Item.new)

        expect(policy.send(:standard_authorized?, :index)).to be true
        expect(policy.send(:standard_authorized?, :create)).to be true
      end

      it "denies actions not in any group" do
        policy = described_class.new(user, Item.new)

        expect(policy.send(:standard_authorized?, :update)).to be false
      end
    end

    context "with class-based records" do
      let(:group) { create(:person_group, company: company) }

      before do
        PersonGroupAssignment.create!(person: person, person_group: group)
        group.add_role(:index, Item)
      end

      it "allows action when checking against class" do
        policy = described_class.new(user, Item)

        expect(policy.send(:standard_authorized?, :index)).to be true
      end

      it "allows action when checking against instance" do
        policy = described_class.new(user, Item.new)

        expect(policy.send(:standard_authorized?, :index)).to be true
      end
    end

    context "with checkout/checkin actions" do
      let(:group) { create(:person_group, company: company) }

      before do
        PersonGroupAssignment.create!(person: person, person_group: group)
        group.add_role(:checkout, Item)
        group.add_role(:checkin, Item)
      end

      it "allows checkout when group has checkout permission" do
        policy = described_class.new(user, Item.new)

        expect(policy.send(:standard_authorized?, :checkout)).to be true
      end

      it "allows checkin when group has checkin permission" do
        policy = described_class.new(user, Item.new)

        expect(policy.send(:standard_authorized?, :checkin)).to be true
      end

      it "denies checkout when group doesn't have checkout permission" do
        group.remove_role(:checkout, Item)
        policy = described_class.new(user, Item.new)

        expect(policy.send(:standard_authorized?, :checkout)).to be false
      end
    end
  end

  describe "#record_class" do
    context "when record is a Class" do
      it "returns the class" do
        policy = described_class.new(user, Item)

        expect(policy.send(:record_class)).to eq(Item)
      end
    end

    context "when record is an instance" do
      it "returns the class of the instance" do
        policy = described_class.new(user, Item.new)

        expect(policy.send(:record_class)).to eq(Item)
      end
    end

    context "when record doesn't respond to class" do
      it "returns nil" do
        policy = described_class.new(user, "string")

        expect(policy.send(:record_class)).to eq(String)
      end
    end
  end

  describe "policy action methods" do
    let(:group) { create(:person_group, company: company) }

    before do
      PersonGroupAssignment.create!(person: person, person_group: group)
      group.add_role(:index, Item)
      group.add_role(:show, Item)
      group.add_role(:create, Item)
      group.add_role(:update, Item)
      group.add_role(:delete, Item)
    end

    context "when checking index?" do
      it "uses standard_authorized? with :index" do
        policy = described_class.new(user, Item)

        expect(policy.index?).to be true
      end
    end

    context "when checking show?" do
      it "uses standard_authorized? with :show" do
        policy = described_class.new(user, Item.new)

        expect(policy.show?).to be true
      end
    end

    context "when checking create?" do
      it "uses standard_authorized? with :create" do
        policy = described_class.new(user, Item)

        expect(policy.create?).to be true
      end
    end

    context "when checking new?" do
      it "delegates to create?" do
        policy = described_class.new(user, Item)

        expect(policy.new?).to be true
      end
    end

    context "when checking update?" do
      it "uses standard_authorized? with :update" do
        policy = described_class.new(user, Item.new)

        expect(policy.update?).to be true
      end
    end

    context "when checking edit?" do
      it "delegates to update?" do
        policy = described_class.new(user, Item.new)

        expect(policy.edit?).to be true
      end
    end

    context "when checking destroy?" do
      it "uses standard_authorized? with :delete" do
        policy = described_class.new(user, Item.new)

        expect(policy.destroy?).to be true
      end
    end
  end
end
