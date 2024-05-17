# == Schema Information
#
# Table name: status_labels
#
#  id          :bigint           not null, primary key
#  description :text
#  name        :string
#  slug        :string           not null
#  status_type :integer          default("deployable")
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_status_labels_on_slug  (slug) UNIQUE
#
class StatusLabelSerializer < ApplicationSerializer
  object_as :status_label

  identifier :slug

  attributes(
    :id,
    :name,
    :status_type,
    :description,
    :created_at,
    :updated_at,
  )
end
