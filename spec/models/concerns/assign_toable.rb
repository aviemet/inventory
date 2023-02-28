shared_examples "assign_toable" do
  describe "Associations" do
    it { is_expected.to have_many(:possessions) }
    it { is_expected.to have_many(:items) }
    it { is_expected.to have_many(:accessories) }
    it { is_expected.to have_many(:components) }
    it { is_expected.to have_many(:consumables) }
    it { is_expected.to have_many(:licenses) }
  end

  describe "Assignments" do
    it "Can be assigned an item" do
      item = create(:item)
      assignment = item.assign_to(subject)
      expect(subject.possessions.first.assignable).to eq(assignment.assignable)
    end

    it "Can be assigned an accessory" do
      accessory = create(:accessory)
      assignment = accessory.assign_to(subject)
      expect(subject.possessions.first.assignable).to eq(assignment.assignable)
    end

    it "Can be assigned a license" do
      license = create(:license)
      assignment = license.assign_to(subject)
      expect(subject.possessions.first.assignable).to eq(assignment.assignable)
    end
  end

end
