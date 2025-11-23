# == Schema Information
#
# Table name: smtps
#
#  id         :bigint           not null, primary key
#  address    :string
#  domain     :string
#  host       :string           not null
#  name       :string           not null
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

  include PgSearchable
  pg_search_config(
    against: [:name, :address, :port, :host],
  )

  enum :security, { plain: 0, tls: 1, ssl: 2 }

  tracked
  resourcify

  validates :name, presence: true
  validates :host, presence: true

end
