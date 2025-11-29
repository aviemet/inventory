require "rails_helper"
require_relative "../support/devise"

RSpec.describe "Tickets", :inertia do
  describe "GET /index" do
    login_admin

    it "renders" do
      get tickets_url

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component "Tickets/Index"
    end
  end

  describe "GET /show" do
    login_admin

    it "renders" do
      ticket = create(:ticket, company: @admin.active_company)

      get ticket_url(ticket)

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component "Tickets/Show"
    end
  end

  describe "GET /new" do
    login_admin

    it "renders" do
      get new_ticket_url

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component "Tickets/New"
    end
  end

  describe "GET /edit" do
    login_admin

    it "renders" do
      ticket = create(:ticket, company: @admin.active_company)

      get edit_ticket_url(ticket)

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component "Tickets/Edit"
    end
  end

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "creates a new Ticket" do
        expect {
          post tickets_url, params: { ticket: attributes_for(:ticket).except(:status, :company, :created_by) }
        }.to change(Ticket, :count).by(1)
      end

      it "redirects to the created ticket" do
        post tickets_url, params: { ticket: attributes_for(:ticket).except(:status, :company, :created_by) }
        expect(response).to redirect_to(ticket_url(Ticket.last))
      end
    end

    context "with invalid parameters" do
      let(:invalid_attributes) { { ticket: {
        subject: "",
        description: nil,
      } } }

      it "does not create a new Ticket" do
        expect {
          post tickets_url, params: invalid_attributes
        }.not_to change(Ticket, :count)
      end

      it "redirects back to the new ticket page" do
        post tickets_url, params: invalid_attributes
        expect(response).to redirect_to new_ticket_url
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the requested ticket and redirects to ticket page" do
        ticket = create(:ticket, company: @admin.active_company)
        new_attributes = attributes_for(:ticket).except(:status, :company, :created_by)
        patch ticket_url(ticket), params: { ticket: new_attributes }
        ticket.reload
        expect(ticket.subject).to eq(new_attributes[:subject])
        expect(ticket.description).to eq(new_attributes[:description])
        expect(response).to redirect_to(ticket_url(ticket))
      end
    end

    context "with invalid parameters" do
      invalid_attributes = { ticket: {
        subject: "",
        description: nil,
      } }

      it "redirects back to the edit ticket page" do
        ticket = create(:ticket, company: @admin.active_company)
        patch ticket_url(ticket), params: invalid_attributes
        expect(response).to redirect_to edit_ticket_url(ticket)
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested ticket" do
      ticket = create(:ticket, company: @admin.active_company)
      expect {
        delete ticket_url(ticket)
      }.to change(Ticket, :count).by(-1)
    end

    it "redirects to the tickets list" do
      ticket = create(:ticket, company: @admin.active_company)
      delete ticket_url(ticket)
      expect(response).to redirect_to(tickets_url)
    end
  end
end
