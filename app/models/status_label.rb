# == Schema Information
#
# Table name: status_labels
#
#  id          :bigint           not null, primary key
#  description :text
#  name        :string           not null
#  slug        :string           not null
#  status_type :integer          default("deployable")
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_status_labels_on_slug  (slug) UNIQUE
#
class StatusLabel < ApplicationRecord
  slug :name

  tracked
  resourcify

  enum :status_type, %i(deployable pending undeployable archived)

  validates :name, presence: true

  has_many :assets, dependent: :nullify
  has_many :items, dependent: :nullify
  has_many :accessories, dependent: :nullify
  has_many :components, dependent: :nullify
  has_many :licenses, dependent: :nullify

end
