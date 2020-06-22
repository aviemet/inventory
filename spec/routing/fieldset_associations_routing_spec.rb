require "rails_helper"

RSpec.describe FieldsetAssociationsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/fieldset_associations").to route_to("fieldset_associations#index")
    end

    it "routes to #new" do
      expect(get: "/fieldset_associations/new").to route_to("fieldset_associations#new")
    end

    it "routes to #show" do
      expect(get: "/fieldset_associations/1").to route_to("fieldset_associations#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/fieldset_associations/1/edit").to route_to("fieldset_associations#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/fieldset_associations").to route_to("fieldset_associations#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/fieldset_associations/1").to route_to("fieldset_associations#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/fieldset_associations/1").to route_to("fieldset_associations#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/fieldset_associations/1").to route_to("fieldset_associations#destroy", id: "1")
    end
  end
end
