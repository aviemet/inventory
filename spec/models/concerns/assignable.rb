shared_examples "assignable" do
  describe "Associations" do
    it { is_expected.to have_many(:assignments) }
  end

  describe "Assignments" do
    it "Can be assigned to an assign_toable" do
      person = create(:person)
      assignment = subject.assign_to(person)
      expect(assignment.assign_toable_type).to eq("Person")
    end
  end
end

shared_examples "assignable:single" do
  it_behaves_like "assignable"

  describe "Assignments Single Item" do
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
end

shared_examples "assignable:quantity" do
  it_behaves_like "assignable"

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
      expect(subject.respond_to?(:assignment)).to be(false)
    end

    it "Can be unassigned" do
      person = create(:person)
      expect{ subject.assign_to(person, { qty: 1 }) }.to change{ subject.qty }.by(-1)
      expect{ subject.unassign(subject.assignments.first.id) }.to change{ subject.qty }.by(1)
    end
  end
end

shared_examples "assignable:consume" do
  it_behaves_like "assignable"

  it "Can have multiple assignments" do
    person = create(:person)
    location = create(:location)
    subject.assign_to(person)
    subject.assign_to(location)
    expect(subject.assignments.count).to eq(2)
  end

  it "Should not respond to assignment" do
    expect(subject.respond_to?(:assignment)).to be(false)
  end

  it "Should not respond to unassign" do
    expect(subject.respond_to?(:unassign)).to be(false)
  end
end
