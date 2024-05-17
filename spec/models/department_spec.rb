# == Schema Information
#
# Table name: departments
#
#  id          :bigint           not null, primary key
#  name        :string
#  notes       :text
#  slug        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  location_id :bigint
#  manager_id  :bigint
#
# Indexes
#
#  index_departments_on_location_id  (location_id)
#  index_departments_on_manager_id   (manager_id)
#  index_departments_on_slug         (slug) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (location_id => locations.id)
#  fk_rails_...  (manager_id => people.id)
#
require 'rails_helper'
require 'models/concerns/contactable'
require 'models/concerns/ownable'
require "models/concerns/serializable"

RSpec.describe Department do
  subject(:department) { build(:department) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(department).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:department, {
        name: nil
      },)).not_to be_valid
    end
  end

  describe "Associations" do
    it_behaves_like "contactable"
    it_behaves_like "ownable"
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
