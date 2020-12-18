shared_examples "assignable" do
  describe "Associations" do
    it { is_expected.to have_many(:assignments) }
  end

  describe "Assignments" do
    it "Can be assigned to an assign_toable" do
      person = create(:person)
      subject.assign_to(person)
      expect(subject.assigned_to).to eq(person)
    end

    it "Has methods to access assignments" do
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
