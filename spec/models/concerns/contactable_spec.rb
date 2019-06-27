shared_examples 'contactable' do
	it { is_expected.to have_many(:contacts) }
end
