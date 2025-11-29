# == Schema Information
#
# Table name: licenses
#
#  id              :bigint           not null, primary key
#  cost_cents      :integer
#  cost_currency   :string           default("USD"), not null
#  expires_at      :datetime
#  key             :text
#  licenser_email  :string
#  licenser_name   :string
#  maintained      :boolean          default(FALSE), not null
#  name            :string           not null
#  notes           :text
#  purchased_at    :datetime
#  qty             :integer
#  reassignable    :boolean          default(FALSE), not null
#  terminates_at   :datetime
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  category_id     :bigint           not null
#  manufacturer_id :bigint           not null
#  status_label_id :bigint
#  vendor_id       :bigint
#
# Indexes
#
#  index_licenses_on_category_id      (category_id)
#  index_licenses_on_manufacturer_id  (manufacturer_id)
#  index_licenses_on_status_label_id  (status_label_id)
#  index_licenses_on_vendor_id        (vendor_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (manufacturer_id => manufacturers.id)
#  fk_rails_...  (status_label_id => status_labels.id)
#  fk_rails_...  (vendor_id => vendors.id)
#
require "rails_helper"
require "models/concerns/ownable"
require "models/concerns/purchasable"
require "models/concerns/fieldable"
require "models/concerns/assignable"
require "models/concerns/serializable"

RSpec.describe License do
  subject(:license) { build(:license) }

  describe "Associations" do
    it_behaves_like "ownable"
    it_behaves_like "purchasable"
    it_behaves_like "fieldable"
    it_behaves_like "assignable"
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
