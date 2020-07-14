require "rails_helper"

RSpec.describe ConsumableCategoriesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/consumable_categories").to route_to("consumable_categories#index")
    end

    it "routes to #new" do
      expect(get: "/consumable_categories/new").to route_to("consumable_categories#new")
    end

    it "routes to #show" do
      expect(get: "/consumable_categories/1").to route_to("consumable_categories#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/consumable_categories/1/edit").to route_to("consumable_categories#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/consumable_categories").to route_to("consumable_categories#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/consumable_categories/1").to route_to("consumable_categories#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/consumable_categories/1").to route_to("consumable_categories#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/consumable_categories/1").to route_to("consumable_categories#destroy", id: "1")
    end
  end
end
