shared_examples "purchasable" do
  it { is_expected.to have_one(:purchase) }
end
