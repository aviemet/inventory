# == Schema Information
#
# Table name: companies
#
#  id               :bigint           not null, primary key
#  default_currency :string           not null
#  name             :string           not null
#  settings         :jsonb
#  slug             :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  app_smtp_id      :bigint
#  tickets_smtp_id  :bigint
#
# Indexes
#
#  index_companies_on_app_smtp_id      (app_smtp_id)
#  index_companies_on_settings         (settings) USING gin
#  index_companies_on_slug             (slug) UNIQUE
#  index_companies_on_tickets_smtp_id  (tickets_smtp_id)
#
# Foreign Keys
#
#  fk_rails_...  (app_smtp_id => smtps.id)
#  fk_rails_...  (tickets_smtp_id => smtps.id)
#
require 'rails_helper'
require 'models/concerns/contactable'
require "models/concerns/serializable"

RSpec.describe Company do
  subject(:company) { build(:company) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(company).to be_valid
    end

    it "is not valid without a name" do
      company.name = nil
      expect(company).not_to be_valid
    end
  end

  describe "Associations" do
    it_behaves_like "contactable"

    it { is_expected.to have_many(:ownerships) }

    {
      items: 'Item',
      departments: 'Department',
      locations: 'Location',
      contracts: 'Contract',
      networks: 'Network',
      people: 'Person',
      vendors: 'Vendor'
    }.each_pair do |assoc, _|
      it { is_expected.to have_many(assoc) }
    end
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
