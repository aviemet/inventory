class Smtp < ApplicationRecord
  include Ownable
  include PgSearch::Model

  resourcify
  tracked

  pg_search_scope(
    :search,
    against: [:name, :address, :port, :domain],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    }
  )

end
