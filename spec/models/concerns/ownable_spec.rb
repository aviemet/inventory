shared_examples "ownable" do
  it { is_expected.to have_one(:owner) }
end
