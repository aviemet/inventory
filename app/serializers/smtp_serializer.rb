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
class SmtpSerializer < ApplicationSerializer
  object_as :smtp

  attributes(
    :name,
    :address,
    :host,
    :port,
    :domain,
    :security,
    :username,
    :password,
    :notes,
    :created_at,
    :updated_at,
  )
end
