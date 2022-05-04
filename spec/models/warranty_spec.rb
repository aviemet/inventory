require 'rails_helper'
require 'models/concerns/contactable'

RSpec.describe Warranty, type: :model do

  describe "Associations" do
    it_behaves_like "contactable"

    it { should belong_to(:item) }
  end
end
