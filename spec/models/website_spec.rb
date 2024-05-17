# == Schema Information
#
# Table name: websites
#
#  id         :bigint           not null, primary key
#  name       :string
#  notes      :string
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  contact_id :bigint           not null
#
# Indexes
#
#  index_websites_on_contact_id  (contact_id)
#
# Foreign Keys
#
#  fk_rails_...  (contact_id => contacts.id)
#
require 'rails_helper'
require "models/concerns/serializable"

RSpec.describe Website do

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
