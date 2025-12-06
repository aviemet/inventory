# == Schema Information
#
# Table name: person_groups
#
#  id          :bigint           not null, primary key
#  description :text
#  name        :string           not null
#  slug        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_person_groups_on_slug  (slug) UNIQUE
#
class PersonGroup < ApplicationRecord
  include Ownable

  include PgSearchable
  pg_search_config(
    against: [:name],
    associated_against: {
      person: [:first_name, :last_name],
    },
    enable_multisearch: true,
  )

  tracked
  resourcify
  rolify

  slug :name

  has_many :person_group_assignments, dependent: :destroy
  has_many :people, through: :person_group_assignments

  validates :name, presence: true

  scope :includes_associated, -> { includes([:people]) }

  def set_permissions(permissions)
    permissions&.each do |model, actions|
      constant = model.singularize.camelize.constantize

      actions.each do |action, enabled|
        if enabled
          self.add_role action, constant
        elsif enabled == false
          self.remove_role action, constant
        end
      end

    end
  end

end
