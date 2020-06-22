require 'rails_helper'
require 'models/concerns/contactable_spec'
require 'models/concerns/ownable_spec'

RSpec.describe Person, type: :model do
  describe "Validations" do
  end

  describe "Associations" do
    it_behaves_like "contactable"
    it_behaves_like "ownable"

    it { should belong_to(:department).optional }
    it { should belong_to(:manager).class_name('Person').optional }
    it { should have_one(:user) }
    # it { should have_many(:items_assignments) }
    it { should have_many(:items) }
  end
end
