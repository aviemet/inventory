class Ticket < ApplicationRecord
  include PgSearch::Model

  pg_search_scope(
    :search,
    against: [:subject], associated_against: {
      created_by: [:email]
    }, using: {
      tsearch: { prefix: true },
      trigram: {}
    }
  )

  belongs_to :created_by, class_name: "User", required: false

  validates_presence_of :subject, on: :create, message: "Subject can't be blank"
end
