require 'rails_helper'

RSpec.describe User, type: :model do
  context 'Validation' do
    it 'ensures person presence' do
      expect { User.create(email: "test@tester.com", password: "password").to change{ Person.count }.by 1 }
    end
  end
end
