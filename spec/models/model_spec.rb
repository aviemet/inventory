# == Schema Information
#
# Table name: models
#
#  id              :bigint           not null, primary key
#  model_number    :string
#  name            :string
#  notes           :text
#  slug            :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  category_id     :bigint           not null
#  manufacturer_id :bigint           not null
#
# Indexes
#
#  index_models_on_category_id      (category_id)
#  index_models_on_manufacturer_id  (manufacturer_id)
#  index_models_on_slug             (slug) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (manufacturer_id => manufacturers.id)
#
require 'rails_helper'
require 'models/concerns/fieldable'
require "models/concerns/serializable"

RSpec.describe Model do
  subject(:model) { build(:model) }

  describe "Associations" do
    it_behaves_like "fieldable"
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
