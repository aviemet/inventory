require 'rails_helper'
require 'models/concerns/ownable'
require 'models/concerns/contactable'
require 'models/concerns/assignable'
require 'models/concerns/fieldable'

RSpec.describe Person, type: :model do
  describe "Validations" do
  end

  describe "Associations" do
    it_behaves_like "ownable"
    it_behaves_like "contactable"
    it_behaves_like "assignable"
    it_behaves_like "fieldable"

    it { should belong_to(:manager).class_name('Person').optional }
    it { should have_one(:user) }
    it { should have_many(:items) }
    # it { should have_many(:items_assignments) }
  end
end
