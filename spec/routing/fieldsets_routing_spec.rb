require "rails_helper"

RSpec.describe FieldsetsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/fieldsets").to route_to("fieldsets#index")
    end

    it "routes to #new" do
      expect(get: "/fieldsets/new").to route_to("fieldsets#new")
    end

    it "routes to #show" do
      expect(get: "/fieldsets/1").to route_to("fieldsets#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/fieldsets/1/edit").to route_to("fieldsets#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/fieldsets").to route_to("fieldsets#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/fieldsets/1").to route_to("fieldsets#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/fieldsets/1").to route_to("fieldsets#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/fieldsets/1").to route_to("fieldsets#destroy", id: "1")
    end
  end
end
