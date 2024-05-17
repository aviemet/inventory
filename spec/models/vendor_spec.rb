# == Schema Information
#
# Table name: vendors
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  slug       :string           not null
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_vendors_on_slug  (slug) UNIQUE
#
require 'rails_helper'
require 'models/concerns/contactable'
require 'models/concerns/ownable'
require "models/concerns/serializable"

RSpec.describe Vendor do
  subject(:vendor) { build(:vendor) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(vendor).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:vendor, {
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
