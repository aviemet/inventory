shared_examples "assigntoable" do
  it { is_expected.to have_many(:assignments) }
  it { is_expected.to have_many(:items) }
  it { is_expected.to have_many(:accessories) }
  it { is_expected.to have_many(:licenses) }
end
