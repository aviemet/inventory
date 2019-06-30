require 'rails_helper'

RSpec.describe User, type: :model do
  context 'Validation' do
    subject { User.create!(email: "test@tester.com", password: "password") }

    it 'ensures person presence' do
      expect(subject.person).to be_a Person
    end

    it 'saves email in contact card' do
      expect(subject.person.contact.emails.first.email).to eq "test@tester.com"
    end
  end
end
