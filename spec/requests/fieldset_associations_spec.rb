 require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe "/fieldset_associations", type: :request do
  # FieldsetAssociation. As you add validations to FieldsetAssociation, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  describe "GET /index" do
    it "renders a successful response" do
      FieldsetAssociation.create! valid_attributes
      get fieldset_associations_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      fieldset_association = FieldsetAssociation.create! valid_attributes
      get fieldset_association_url(fieldset_association)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_fieldset_association_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "render a successful response" do
      fieldset_association = FieldsetAssociation.create! valid_attributes
      get edit_fieldset_association_url(fieldset_association)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new FieldsetAssociation" do
        expect {
          post fieldset_associations_url, params: { fieldset_association: valid_attributes }
        }.to change(FieldsetAssociation, :count).by(1)
      end

      it "redirects to the created fieldset_association" do
        post fieldset_associations_url, params: { fieldset_association: valid_attributes }
        expect(response).to redirect_to(fieldset_association_url(FieldsetAssociation.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new FieldsetAssociation" do
        expect {
          post fieldset_associations_url, params: { fieldset_association: invalid_attributes }
        }.to change(FieldsetAssociation, :count).by(0)
      end

      it "renders a successful response (i.e. to display the 'new' template)" do
        post fieldset_associations_url, params: { fieldset_association: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested fieldset_association" do
        fieldset_association = FieldsetAssociation.create! valid_attributes
        patch fieldset_association_url(fieldset_association), params: { fieldset_association: new_attributes }
        fieldset_association.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the fieldset_association" do
        fieldset_association = FieldsetAssociation.create! valid_attributes
        patch fieldset_association_url(fieldset_association), params: { fieldset_association: new_attributes }
        fieldset_association.reload
        expect(response).to redirect_to(fieldset_association_url(fieldset_association))
      end
    end

    context "with invalid parameters" do
      it "renders a successful response (i.e. to display the 'edit' template)" do
        fieldset_association = FieldsetAssociation.create! valid_attributes
        patch fieldset_association_url(fieldset_association), params: { fieldset_association: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested fieldset_association" do
      fieldset_association = FieldsetAssociation.create! valid_attributes
      expect {
        delete fieldset_association_url(fieldset_association)
      }.to change(FieldsetAssociation, :count).by(-1)
    end

    it "redirects to the fieldset_associations list" do
      fieldset_association = FieldsetAssociation.create! valid_attributes
      delete fieldset_association_url(fieldset_association)
      expect(response).to redirect_to(fieldset_associations_url)
    end
  end
end