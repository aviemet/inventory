# == Schema Information
#
# Table name: documentations
#
#  id                :bigint           not null, primary key
#  body              :text
#  documentable_type :string           not null
#  slug              :string           not null
#  title             :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  category_id       :bigint           not null
#  created_by_id     :bigint
#  documentable_id   :bigint           not null
#
# Indexes
#
#  index_documentations_on_category_id    (category_id)
#  index_documentations_on_created_by_id  (created_by_id)
#  index_documentations_on_documentable   (documentable_type,documentable_id)
#  index_documentations_on_slug           (slug) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (created_by_id => people.id)
#
require 'rails_helper'

RSpec.describe Documentation do
end
