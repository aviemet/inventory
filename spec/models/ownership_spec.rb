# == Schema Information
#
# Table name: ownerships
#
#  id            :bigint           not null, primary key
#  ownable_type  :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  company_id    :bigint           not null
#  department_id :bigint
#  ownable_id    :bigint           not null
#
# Indexes
#
#  index_ownerships_on_company_id                   (company_id)
#  index_ownerships_on_department_id                (department_id)
#  index_ownerships_on_ownable_type_and_ownable_id  (ownable_type,ownable_id)
#
# Foreign Keys
#
#  fk_rails_...  (company_id => companies.id)
#  fk_rails_...  (department_id => departments.id)
#
require 'rails_helper'

RSpec.describe Ownership do
  subject(:ownership) { build(:ownership) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(ownership).to be_valid
    end

    it "is invalid with invalid attributes" do
      expect(build(:ownership, {
        ownable: nil
      },)).not_to be_valid
    end
  end

  describe "Associations" do
    it { is_expected.to belong_to(:ownable) }
  end
end
