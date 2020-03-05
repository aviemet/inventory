require 'rails_helper'

test_user_info = { email: "test@tester.com", password: "password" }

RSpec.describe User, type: :model do
  context 'Validation' do
    subject { User.new(test_user_info) }

    it 'is valid with email and password' do
      expect(subject.valid?).to be true
    end

    it 'is invalid with no email' do
      invalid_user = User.new(password: test_user_info[:password])
      expect(invalid_user.valid?).to be false
    end

    it 'is invalid with invalid email' do
      invalid_user = User.new(email: "wrong")
      expect(invalid_user.valid?).to be false
    end
  end

  context 'Creation' do
    subject { User.create!(test_user_info) }

    it 'saves email in contact card' do
      expect(subject.person.contact.emails.first.email).to eq "test@tester.com"
    end

  end
end
