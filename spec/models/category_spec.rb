# == Schema Information
#
# Table name: categories
#
#  id                 :bigint           not null, primary key
#  categorizable_type :string           not null
#  description        :text
#  name               :string
#  slug               :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
# Indexes
#
#  index_categories_on_name_and_categorizable_type  (name,categorizable_type) UNIQUE
#  index_categories_on_slug                         (slug) UNIQUE
#
require 'rails_helper'
require "models/concerns/serializable"

RSpec.describe Category do
  subject(:category) { build(:category) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(category).to be_valid
    end

    it "is not valid without a name" do
      category.name = nil
      expect(category).not_to be_valid
    end

    it "is not valid without a categorizable_type" do
      category.categorizable_type = nil
      expect(category).not_to be_valid
    end
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
