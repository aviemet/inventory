shared_examples "contactable" do
  it { is_expected.to have_one(:contact) }
  it { is_expected.to have_many(:addresses) }
  it { is_expected.to have_many(:phones) }
  it { is_expected.to have_many(:emails) }
  it { is_expected.to have_many(:websites) }
end
