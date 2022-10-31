shared_examples "assignable" do

  describe "Associations" do
    it { is_expected.to have_many(:assignments) }
  end

  describe "Assignments" do
    it "Can be assigned to an assign_toable" do
      person = build(:person)
      assignment = subject.assign_to(person)
      expect(assignment.assign_toable_type).to eq("Person")
    end
  end

end

shared_examples "assignable:single" do
  it_behaves_like "assignable"

  describe "Assignments Single Item" do
    it "Can reference its current assignment"  do
      person = build(:person)
      expect(subject.assigned?).to be(false)
      subject.assign_to(person)
      expect(subject.assigned?).to be(true)
      expect(subject.assignment).to be_a(Assignment)
    end

    it "Can only have one active assignment" do
      person = build(:person)
      location = build(:location)

      subject.assign_to(person)
      expect {
        subject.assign_to(location)
      }.to raise_error(StandardError)
      expect(subject.assignments.size).to eq(1)
    end

    it "Can be unassigned" do
      person = build(:person)
      subject.assign_to(person)
      expect(subject.assigned_to).to eq(person)
      subject.unassign
      expect(subject.assignment).to be(nil)
    end
  end

end

shared_examples "assignable:quantity" do
  it_behaves_like "assignable"

  describe "Assets with quantiy assignments", if: @has_quantity do
    it "Can have multiple assignments" do
      person = build(:person)
      location = build(:location)
      subject.assign_to(person)
      subject.assign_to(location)
      expect(subject.assignments.count).to eq(2)
      expect(subject.assigned_to).to eq(location)
    end

    it "Should reduce qty when assigned" do
      person = build(:person)
      expect{ subject.assign_to(person) }.to change{ subject.qty }.by(-1)
      qty = 2
      expect{ subject.assign_to(person, qty: qty) }.to change{ subject.qty }.by(-qty)
    end

    it "Should not respond to assignment" do
      expect(subject.respond_to?(:assignment)).to be(false)
    end

    it "Can be unassigned" do
      person = build(:person)
      subject.assign_to(person)
      expect{ subject.unassign(subject.assignments.first) }.to change{ subject.qty }.by(1)
    end

    it "Cannot assign more than are available" do
      subject.update qty: 1
      expect{ 
        subject.assign_to(person, qty: 2) 
      }.to raise StandardError
    end
  end

end

shared_examples "assignable:consume" do
  it_behaves_like "assignable"

  describe "Consumables assets", if: @has_quantity do
    it "Can have multiple assignments" do
      person = build(:person)
      location = build(:location)
      subject.assign_to(person)
      subject.assign_to(location)
      expect(subject.assignments.count).to eq(2)
    end

    it "Should reduce qty when assigned" do
      person = build(:person)
      expect{ subject.assign_to(person) }.to change{ subject.qty }.by(-1)
      qty = 2
      expect{ subject.assign_to(person, qty: qty) }.to change{ subject.qty }.by(-qty)
    end

    it "Should not respond to assignment" do
      expect(subject.respond_to?(:assignment)).to be(false)
    end

    it "Should not respond to unassign" do
      expect(subject.respond_to?(:unassign)).to be(false)
    end

    it "Cannot assign more than are available" do
      subject.update qty: 1
      expect{ 
        subject.assign_to(person, qty: 2) 
      }.to raise StandardError
    end
  end

end
