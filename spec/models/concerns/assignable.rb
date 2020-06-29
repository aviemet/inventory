shared_examples "assignable" do
  it { is_expected.to have_many(:assignments) }
  it { is_expected.to have_many(:items) }
end
