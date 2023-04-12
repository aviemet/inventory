require 'rails_helper'
require 'models/concerns/ownable'
require "models/concerns/serializable"

RSpec.describe Smtp, type: :model do
  describe "Associations" do
    it_behaves_like "ownable"
  end
end
