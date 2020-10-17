shared_examples "assignable" do
  it { is_expected.to have_many(:assignments) }
  it { is_expected.to have_many(:items) }
  it { is_expected.to have_many(:people) }
  it { is_expected.to have_many(:locations) }
  it { is_expected.to have_many(:departments) }
end
