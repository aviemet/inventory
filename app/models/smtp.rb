class Smtp < ApplicationRecord
  include Ownable

  pg_search_scope(
    :search,
    against: [:name, :address, :port, :host],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  enum :security, { plain: 0, tls: 1, ssl: 2 }

  tracked
  resourcify

  validates :name, presence: true
  validates :username, presence: true
  validates :password, presence: true
  validates :host, presence: true
  validates :port, presence: true

end
