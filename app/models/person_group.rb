class PersonGroup < ApplicationRecord
  include Ownable
  include PgSearch::Model

  multisearchable(
    against: [:name],
    additional_attributes: ->(record) { { label: record.name } },
  )

  pg_search_scope(
    :search,
    against: [:name], associated_against: {
      person: [:first_name, :last_name],
    },
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  tracked
  resourcify
  rolify

  slug :name

  has_many :person_group_assignments
  has_many :people, through: :person_group_assignments

  validates_presence_of :name

  scope :includes_associated, -> { includes([:people]) }

  def set_permissions(permissions)
    permissions&.each do |model, actions|
      constant = if model == 'company'
                   model.singularize.camelize.constantize
                 else
                   self.company
                 end

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
