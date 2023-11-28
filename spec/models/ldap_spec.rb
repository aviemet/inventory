require 'rails_helper'
require "models/concerns/serializable"

RSpec.describe Ldap do

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
