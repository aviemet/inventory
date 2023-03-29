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
      if model == "company_admin" && actions == true
        ap({ model:, actions:, company: self.company })
        self.add_role :admin, self.company
      else
        ap({ model:, actions: })
        constant = model.singularize.camelize.constantize

        actions.each do |action, enabled|
          if enabled
            self.add_role action, constant
          else
            self.remove_role action, constant
          end
        end
      end

    end
  end

end
