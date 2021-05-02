shared_examples "assignable" do
  before :each do
    @has_quantity = subject.asset_with_quantity?
  end

  describe "Associations" do
    it { is_expected.to have_many(:assignments) }
  end

  describe "Assignments" do
    it "Can be assigned to an assign_toable" do
      person = create(:person)
      assignment = subject.assign_to(person)
      expect(assignment.assign_toable_type).to eq("Person")
    end

    describe "Asset without quantity", unless: @has_quantity do
      it "Can reference its current assignment"  do
        person = create(:person)
        subject.assign_to(person)
        expect(subject.assigned?).to be(true)
        expect(subject.assignment).to be_a(Assignment)
      end

      it "Can only have one active assignment" do
        person = create(:person)
        subject.assign_to(person)
        subject.assign_to(create(:location))
        expect(subject.assigned_to).to eq(person)
      end

      it "Can be unassigned" do
        person = create(:person)
        subject.assign_to(person)
        expect(subject.assigned_to).to eq(person)
        subject.unassign
        expect(subject.assignment).to be(nil)
      end
    end

    describe "Assets with quantiy assignments", if: @has_quantity do
      it "Can have multiple assignments" do
        person = create(:person)
        location = create(:location)
        subject.assign_to(person)
        subject.assign_to(location)
        expect(subject.assignments.count).to eq(2)
        expect(subject.assigned_to).to eq(location)
      end

      it "Should not respond to assignment" do
        expect(subject.assignment).to raise_error(NoMethodError)
      end
    end
  end
end
