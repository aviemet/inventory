require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "/documentations", type: :request do
  def valid_attributes
    {
      documentation: attributes_for(:documentation, {
        documentable_type: "Item",
        documentable_id: 1
      },),
    }
  end

  def invalid_attributes
    {
      documentation: {
        title: "",
      }
    }
  end

  describe "GET /" do
    login_admin

    context "index page" do
      it "lists all documentations" do
        documentation = create(:documentation, company: @admin.active_company)

        get documentations_url

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(documentation.title))
      end
    end

    context "index page with search params" do
      it "returns a filtered list of documentations" do
        documentation1 = create(:documentation, { title: "Include", company: @admin.active_company })
        documentation2 = create(:documentation, { title: "Exclue", company: @admin.active_company })

        get documentations_url, params: { search: documentation1.title }

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(documentation1.title))
        expect(response.body).not_to include(CGI.escapeHTML(documentation2.title))
      end
    end

    context "new page" do
      it "displays form to create a new documentation" do
        get new_documentation_url

        expect(response).to have_http_status(:ok)
      end
    end

    context "edit page" do
      it "displays form to edit a documentation" do
        documentation = create(:documentation, { company: @admin.active_company })

        get edit_documentation_url(documentation)

        expect(response).to have_http_status(:ok)
      end
    end

    context "show page" do
      it "renders" do
        documentation = create(:documentation, company: @admin.active_company)
        get documentation_url({ slug: documentation.slug })
        expect(response).to have_http_status(:ok)
      end
    end
  end

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "creates a new Documentation and redirects to show page" do
        ap({ valid_attributes: })
        expect{
          post documentations_url, params: valid_attributes
        }.to change(Documentation, :count).by(1)
        expect(response).to redirect_to(documentation_url(Documentation.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Documentation redirects back to the new documentation page" do
        expect {
          post documentations_url, params: invalid_attributes
        }.to change(Documentation, :count).by(0)
        expect(response).to redirect_to new_documentation_url
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the requested documentation and redirects to the show page" do
        documentation = create(:documentation, { company: @admin.active_company })
        patch documentation_url(documentation), params: { documentation: { title: "Changed" } }

        documentation.reload

        expect(documentation.title).to eq("Changed")
        expect(response).to redirect_to(documentation_url(documentation))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit documentation page" do
        documentation = create(:documentation, company: @admin.active_company)
        patch documentation_url(documentation), params: invalid_attributes
        expect(response).to redirect_to edit_documentation_url(documentation)
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested documentation" do
      documentation = create(:documentation, company: @admin.active_company)
      expect {
        delete documentation_url(documentation)
      }.to change(Documentation, :count).by(-1)
    end

    it "redirects to the documentations list" do
      documentation = create(:documentation, company: @admin.active_company)
      delete documentation_url(documentation)
      expect(response).to redirect_to(documentations_url)
    end
  end
end
