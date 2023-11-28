require 'rails_helper'
require "models/concerns/serializable"

RSpec.describe Ticket do

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
