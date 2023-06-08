class Smtp < ApplicationRecord
  include Ownable
  include PgSearch::Model

  enum :security, { basic: 0, tls: 1, ssl: 2 }

  tracked
  resourcify

  validates_presence_of :name
  validates_presence_of :username
  validates_presence_of :password
  validates_presence_of :domain
  validates_presence_of :port

  pg_search_scope(
    :search,
    against: [:name, :address, :port, :domain],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

end
