require 'rails_helper'

RSpec.describe User, type: :model do
  context 'Validation' do
    it 'is valid with email and password' do
    
    end
  end

  context 'Creation' do
    subject { User::AsRegister.create!(email: "test@tester.com", password: "password") }

    it 'saves email in contact card' do
      expect(subject.person.contact.emails.first.email).to eq "test@tester.com"
    end
  end
end
