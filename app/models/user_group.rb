class UserGroup < ApplicationRecord
  include Ownable
  include PgSearch::Model

  pg_search_scope(
    :search,
    against: [:name], associated_against: {
      user: [:email, :count]
    },
    using: {
      tsearch: { prefix: true },
      trigram: {}
    }
  )

  tracked
  resourcify
  rolify

  slug :name

  has_many :user_group_assignments
  has_many :users, through: :user_group_assignments

  validates_presence_of :name

  scope :includes_associated, -> { includes([:users]) }

  def set_permissions(permissions)
    permissions.each do |model, actions|
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
