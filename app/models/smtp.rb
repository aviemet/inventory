# == Schema Information
#
# Table name: smtps
#
#  id         :bigint           not null, primary key
#  address    :string
#  domain     :string
#  host       :string
#  name       :string
#  notes      :text
#  password   :string
#  port       :integer
#  security   :integer          default("plain")
#  username   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
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
