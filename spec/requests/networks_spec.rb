require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "/networks" do
  def valid_attributes
    {
      network: attributes_for(:network)
    }
  end

  def invalid_attributes
    {
      network: {
        address: "",
      }
    }
  end

  describe "GET /" do
    login_admin

    context "index page" do
      it "lists all networks" do
        network = create(:network, { company: User.first.active_company })

        get networks_url

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(network.name))
      end
    end

    context "index page with search params" do
      it "returns a filtered list of networks" do
        network1 = create(:network, { name: "Include", company: User.first.active_company })
        network2 = create(:network, { name: "Exclue", company: User.first.active_company })

        get networks_url, params: { search: network1.name }

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(network1.name))
        expect(response.body).not_to include(CGI.escapeHTML(network2.name))
      end
    end

    context "new page" do
      it "displays form to create a new network" do
        get new_network_url

        expect(response).to have_http_status(:ok)
      end
    end

    context "edit page" do
      it "displays form to edit a network" do
        network = create(:network, company: User.first.active_company)

        get edit_network_url(network)

        expect(response).to have_http_status(:ok)
      end
    end

    context "show page" do
      it "renders" do
        network = create(:network, company: @admin.active_company)
        get network_url({ id: network.id })
        expect(response).to have_http_status(:ok)
      end
    end
  end

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "creates a new Network and redirects to show page" do
        expect{
          post networks_url, params: valid_attributes
        }.to change(Network, :count).by(1)
        expect(response).to redirect_to(network_url(Network.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Network" do
        expect {
          post networks_url, params: invalid_attributes
        }.not_to change(Network, :count)
      end

      it "redirects back to the new network page" do
        post networks_url, params: invalid_attributes
        expect(response).to redirect_to new_network_url
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the requested network and redirects to the show page" do
        name_change = "Changed"
        network = create(:network, company: User.first.active_company )
        patch network_url(network.id), params: { network: { name: name_change } }

        network.reload

        expect(network.name).to eq(name_change)
        expect(response).to redirect_to(network_url(network))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit network page" do
        network = create(:network, company: User.first.active_company)
        patch network_url(network), params: invalid_attributes
        expect(response).to redirect_to edit_network_url(network)
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested network" do
      network = create(:network, company: User.first.active_company)
      expect {
        delete network_url({id: network.id})
      }.to change(Network, :count).by(-1)
    end

    it "redirects to the networks list" do
      network = create(:network, company: User.first.active_company)
      delete network_url({id: network.id})
      expect(response).to redirect_to(networks_url)
    end
  end
end
