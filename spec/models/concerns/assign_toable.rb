shared_examples "assign_toable" do
  describe "Associations" do
    it { is_expected.to have_many(:assigned_assets) }
    it { is_expected.to have_many(:items) }
    it { is_expected.to have_many(:accessories) }
    it { is_expected.to have_many(:licenses) }
  end

  describe "Assignments" do
    it "Can be assigned an item" do
      item = build(:item)
      assignment = item.assign_to(subject)
      expect(subject.assigned_assets.first.assignable).to eq(assignment.assignable)
    end

    it "Can be assigned an accessory" do
      accessory = build(:accessory)
      assignment = accessory.assign_to(subject)
      expect(subject.assigned_assets.first.assignable).to eq(assignment.assignable)
    end

    it "Can be assigned a license" do
      license = build(:license)
      assignment = license.assign_to(subject)
      expect(subject.assigned_assets.first.assignable).to eq(assignment.assignable)
    end
  end

end
