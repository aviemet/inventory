require "rails_helper"
require_relative "../support/devise"

RSpec.describe "Contracts", :inertia do
  def valid_attributes
    {
      contract: attributes_for(
        :contract,
        {
          vendor_id: create(:vendor).id,
          category_id: create(:category).id,
        },
      )
    }
  end

  def invalid_attributes
    {
      contract: {
        name: "",
      }
    }
  end

  describe "GET /index" do
    login_admin

    describe "index page" do
      it "lists all contracts" do
        contract = create(:contract, { company: @admin.active_company })

        get contracts_url

        expect(response).to have_http_status(:ok)
        expect_inertia.to render_component "Contracts/Index"
        expect(response.body).to include(CGI.escapeHTML(contract.name))
      end

      context "with search params" do
        it "returns a filtered list of contracts" do
          contract1 = create(:contract, { name: "Include", company: @admin.active_company })
          contract2 = create(:contract, { name: "Exclude", company: @admin.active_company })

          get contracts_url, params: { search: contract1.name }

          expect(response).to have_http_status(:ok)
          expect_inertia.to render_component "Contracts/Index"
          expect(response.body).to include(CGI.escapeHTML(contract1.name))
          expect(response.body).not_to include(CGI.escapeHTML(contract2.name))
        end
      end
    end
  end

  describe "GET /show" do
    login_admin

    it "renders" do
      contract = create(:contract, company: @admin.active_company)

      get contract_url({ slug: contract.slug })

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component "Contracts/Show"
    end
  end

  describe "GET /new" do
    login_admin

    it "renders" do
      get new_contract_url

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component "Contracts/New"
    end
  end

  describe "GET /edit" do
    login_admin

    it "renders" do
      contract = create(:contract, company: @admin.active_company)

      get edit_contract_url(contract)

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component "Contracts/Edit"
    end
  end

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "creates a new contract and redirects to show page" do
        expect{
          post contracts_url, params: valid_attributes
        }.to change(Contract, :count).by(1)
        expect(response).to redirect_to(contract_url(Contract.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new contract" do
        expect {
          post contracts_url, params: invalid_attributes
        }.not_to change(Contract, :count)
      end

      it "redirects back to the new contract page" do
        post contracts_url, params: invalid_attributes
        expect(response).to redirect_to new_contract_url
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the requested contract and redirects to the show page" do
        name_change = "Changed"
        contract = create(:contract, company: @admin.active_company )
        patch contract_url(contract.slug), params: { contract: { name: name_change } }

        contract.reload

        expect(contract.name).to eq(name_change)
        expect(response).to redirect_to(contract_url(contract))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit contract page" do
        contract = create(:contract, company: @admin.active_company)
        patch contract_url(contract), params: invalid_attributes
        expect(response).to redirect_to edit_contract_url(contract)
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested contract" do
      contract = create(:contract, company: @admin.active_company)
      expect {
        delete contract_url({ slug: contract.slug })
      }.to change(Contract, :count).by(-1)
    end

    it "redirects to the contracts list" do
      contract = create(:contract, company: @admin.active_company)
      delete contract_url({ slug: contract.slug })
      expect(response).to redirect_to(contracts_url)
    end
  end
end
