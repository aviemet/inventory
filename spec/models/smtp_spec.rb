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
require 'rails_helper'
require 'models/concerns/ownable'
require "models/concerns/serializable"

RSpec.describe Smtp do
  describe "Associations" do
    it_behaves_like "ownable"
  end
end
