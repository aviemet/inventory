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

  slug :name

  tracked

  has_many :user_group_assignments
  has_many :users, through: :user_group_assignments

  validates_presence_of :name

  scope :includes_associated, -> { includes([:users]) }

  def assign(user)
    UserGroupAssignment.create!({
      user:,
      user_group: self
    })
  end
end
