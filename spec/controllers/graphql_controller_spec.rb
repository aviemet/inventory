require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do

  describe "POST #execute" do
    it "returns http success" do
      post :execute
      expect(response).to have_http_status(:success)
    end
  end

end
