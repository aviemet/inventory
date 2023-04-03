require 'rails_helper'

RSpec.describe "PersonGroups", type: :request do
  describe "GET /person_groups" do
    it "works! (now write some real specs)" do
      get person_groups_index_path
      expect(response).to have_http_status(200)
    end
  end
end
