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
include Rails.application.routes.url_helpers

class DocumentationSerializer < ApplicationSerializer
  object_as :documentation

  identifier :slug

  attributes(
    :title,
    :body,
    :documentable_type,
    :documentable_id,
    :category_id,
    :created_by_id,
  )

  type :string
  def documentable_name
    documentation.documentable&.name || documentation.documentable&.title
  rescue StandardError
    nil
  end

  belongs_to :category, serializer: Categories::OptionsSerializer
end
