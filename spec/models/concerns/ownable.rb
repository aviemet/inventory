shared_examples "ownable" do
  describe "Associations" do
    it { is_expected.to have_one(:owner) }
    it { is_expected.to have_one(:company) }
    it { is_expected.to have_one(:department) }
  end
end
