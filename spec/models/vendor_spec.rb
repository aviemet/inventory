require 'rails_helper'
require 'models/concerns/contactable'
require 'models/concerns/ownable'

RSpec.describe Vendor, type: :model do
  subject { build_stubbed(:vendor) }

  describe "Associations" do
    it_behaves_like "contactable"
    it_behaves_like "ownable"

    it { should have_many(:contracts) }
  end
end
