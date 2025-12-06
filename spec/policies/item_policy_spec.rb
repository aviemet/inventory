require "rails_helper"
require_relative "../support/devise"

RSpec.describe ItemPolicy, type: :policy do
  let(:company) { create(:company) }
  let(:user) { create(:user) }
  let(:person) { create(:person, company: company, user: user) }
  let(:item) { create(:item, company: company) }

  before do
    user.update(active_company: company)
    allow(user).to receive(:person).and_return(person)
  end

  context "when the user is a super_admin" do
    login_admin

    permissions ".scope" do
      it "allows everything" do
        expect(described_class.new(@admin, Accessory.new)).to permit_all_actions
      end
    end
  end

  describe "#checkout?" do
    subject { described_class.new(user, item) }

    context "when user is super_admin" do
      before { user.add_role(:super_admin) }

      it "allows checkout" do
        expect(subject.checkout?).to be true
      end
    end

    context "when person is company admin" do
      before do
        admin_role = company.roles.create!(name: :admin)
        person.roles << admin_role
      end

      it "allows checkout" do
        expect(subject.checkout?).to be true
      end
    end

    context "when person has checkout permission through group" do
      let(:group) { create(:person_group, company: company) }

      before do
        PersonGroupAssignment.create!(person: person, person_group: group)
        group.add_role(:checkout, Item)
      end

      it "allows checkout" do
        expect(subject.checkout?).to be true
      end
    end

    context "when person has checkout permission directly" do
      before do
        person.add_role(:checkout, Item)
      end

      it "allows checkout" do
        expect(subject.checkout?).to be true
      end
    end

    context "when person has no checkout permission" do
      it "denies checkout" do
        expect(subject.checkout?).to be false
      end
    end

    context "when person has other Item permissions but not checkout" do
      let(:group) { create(:person_group, company: company) }

      before do
        PersonGroupAssignment.create!(person: person, person_group: group)
        group.add_role(:index, Item)
        group.add_role(:show, Item)
      end

      it "denies checkout" do
        expect(subject.checkout?).to be false
      end
    end
  end

  describe "#checkin?" do
    subject { described_class.new(user, item) }

    context "when user is super_admin" do
      before { user.add_role(:super_admin) }

      it "allows checkin" do
        expect(subject.checkin?).to be true
      end
    end

    context "when person is company admin" do
      before do
        admin_role = company.roles.create!(name: :admin)
        person.roles << admin_role
      end

      it "allows checkin" do
        expect(subject.checkin?).to be true
      end
    end

    context "when person has checkin permission through group" do
      let(:group) { create(:person_group, company: company) }

      before do
        PersonGroupAssignment.create!(person: person, person_group: group)
        group.add_role(:checkin, Item)
      end

      it "allows checkin" do
        expect(subject.checkin?).to be true
      end
    end

    context "when person has checkin permission directly" do
      before do
        person.add_role(:checkin, Item)
      end

      it "allows checkin" do
        expect(subject.checkin?).to be true
      end
    end

    context "when person has no checkin permission" do
      it "denies checkin" do
        expect(subject.checkin?).to be false
      end
    end

    context "when person has checkout but not checkin" do
      let(:group) { create(:person_group, company: company) }

      before do
        PersonGroupAssignment.create!(person: person, person_group: group)
        group.add_role(:checkout, Item)
      end

      it "allows checkout but denies checkin" do
        expect(subject.checkout?).to be true
        expect(subject.checkin?).to be false
      end
    end
  end

  describe "standard CRUD actions" do
    subject { described_class.new(user, item) }
    let(:group) { create(:person_group, company: company) }

    before do
      PersonGroupAssignment.create!(person: person, person_group: group)
      group.add_role(:index, Item)
      group.add_role(:show, Item)
      group.add_role(:create, Item)
      group.add_role(:update, Item)
      group.add_role(:delete, Item)
    end

    it "respects group permissions for index" do
      policy_with_class = described_class.new(user, Item)
      expect(policy_with_class.index?).to be true
    end

    it "respects group permissions for show" do
      expect(subject.show?).to be true
    end

    it "respects group permissions for create" do
      policy_with_class = described_class.new(user, Item)
      expect(policy_with_class.create?).to be true
    end

    it "respects group permissions for update" do
      expect(subject.update?).to be true
    end

    it "respects group permissions for destroy" do
      expect(subject.destroy?).to be true
    end
  end
end
