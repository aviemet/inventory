require 'rails_helper'

RSpec.describe Person, type: :model do
  context 'Contactable' do
    it_behaves_like 'contactable'

    it 'ensures presence of contact' do
      person = Person.create!
      expect(person.contact).to be_a Contact
    end
  end
end
