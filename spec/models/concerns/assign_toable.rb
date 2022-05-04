shared_examples "assign_toable" do
  it { is_expected.to have_many(:posessions) }
  it { is_expected.to have_many(:items) }
  it { is_expected.to have_many(:accessories) }
  it { is_expected.to have_many(:licenses) }
end
