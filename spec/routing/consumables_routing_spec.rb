require "rails_helper"

RSpec.describe ConsumablesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/consumables").to route_to("consumables#index")
    end

    it "routes to #new" do
      expect(get: "/consumables/new").to route_to("consumables#new")
    end

    it "routes to #show" do
      expect(get: "/consumables/1").to route_to("consumables#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/consumables/1/edit").to route_to("consumables#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/consumables").to route_to("consumables#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/consumables/1").to route_to("consumables#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/consumables/1").to route_to("consumables#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/consumables/1").to route_to("consumables#destroy", id: "1")
    end
  end
end
