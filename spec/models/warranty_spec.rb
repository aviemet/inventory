require 'rails_helper'
require 'models/concerns/contactable'

RSpec.describe Warranty, type: :model do
  subject { build_stubbed(:warranty) }
  describe "Associations" do
    it_behaves_like "contactable"

    it { should belong_to(:item) }
  end
end
