require "rails_helper"

RSpec.describe AccessoryCategoriesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/accessory_categories").to route_to("accessory_categories#index")
    end

    it "routes to #new" do
      expect(get: "/accessory_categories/new").to route_to("accessory_categories#new")
    end

    it "routes to #show" do
      expect(get: "/accessory_categories/1").to route_to("accessory_categories#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/accessory_categories/1/edit").to route_to("accessory_categories#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/accessory_categories").to route_to("accessory_categories#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/accessory_categories/1").to route_to("accessory_categories#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/accessory_categories/1").to route_to("accessory_categories#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/accessory_categories/1").to route_to("accessory_categories#destroy", id: "1")
    end
  end
end
