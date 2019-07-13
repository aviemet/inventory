require 'rails_helper'

test_user_info = { email: "test@tester.com", password: "password" }

RSpec.describe User, type: :model do
  context 'Validation' do
    subject { User::AsRegister.new(test_user_info) }

    it 'is valid with email and password' do
      expect(subject.valid?).to be true
    end
  end

  context 'Creation' do
    subject { User::AsRegister.create!(test_user_info) }

    it 'saves email in contact card' do
      expect(subject.person.contact.emails.first.email).to eq "test@tester.com"
    end

    it 'is not valid if called from base User class instead of User::AsRegister' do
      user = User.create(test_user_info)
      expect(user.valid?).to be false
    end
  end
end
