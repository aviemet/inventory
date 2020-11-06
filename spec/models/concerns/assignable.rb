shared_examples "assignable" do
  describe "Associations" do
    it { is_expected.to have_many(:assignments) }
  end

  describe "Assignments" do
    it "Can be assigned to a Person" do
      subject.assign_to(build(:person))
      expect(subject.assigned_to).to be_a(Person)
    end

    it "Can be assigned to an Item" do
      subject.assign_to(build(:item))
      expect(subject.assigned_to).to be_a(Item)
    end

    it "Can be assigned to a Location" do
      subject.assign_to(build(:location))
      expect(subject.assigned_to).to be_a(Location)
    end

    it "Can not be assigned to a Department" do
      assignment = Assignment.new({ assignable: subject, assign_toable: build(:department) })
      expect(assignment.valid?).to be(false)
    end
  end
end
