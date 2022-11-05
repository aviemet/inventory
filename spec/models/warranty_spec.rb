require 'rails_helper'
require 'models/concerns/contactable'

RSpec.describe Warranty, type: :model do
  subject { build(:warranty) }

  describe "Associations" do
    it_behaves_like "contactable"
  end
end
