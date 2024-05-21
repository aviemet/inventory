# == Schema Information
#
# Table name: models
#
#  id              :bigint           not null, primary key
#  model_number    :string
#  name            :string           not null
#  notes           :text
#  slug            :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  category_id     :bigint           not null
#  manufacturer_id :bigint           not null
#
# Indexes
#
#  index_models_on_category_id            (category_id)
#  index_models_on_manufacturer_id        (manufacturer_id)
#  index_models_on_name_and_model_number  (name,model_number) UNIQUE
#  index_models_on_slug                   (slug) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (manufacturer_id => manufacturers.id)
#
class ModelSerializer < ApplicationSerializer
  object_as :model

  identifier :slug

  attributes(
    :id,
    :slug,
    :name,
    :model_number,
    :notes,
    :category_id,
    :manufacturer_id,
    :created_at,
    :updated_at,
  )
end
