shared_examples "fieldable" do
  it { is_expected.to have_many(:fieldset_associations) }
end
