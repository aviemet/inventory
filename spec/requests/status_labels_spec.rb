require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "/status_labels" do
  def valid_attributes
    {
      status_label: attributes_for(:status_label)
    }
  end

  def invalid_attributes
    {
      status_label: {
        name: "",
      }
    }
  end

  describe "GET /" do
    login_admin

    context "index page" do
      it "lists all status_labels" do
        status_label = create(:status_label)

        get status_labels_url

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(status_label.name))
      end
    end

    context "new page" do
      it "renders" do
        get new_status_label_url

        expect(response).to have_http_status(:ok)
      end
    end

    context "edit page" do
      it "renders" do
        status_label = create(:status_label)

        get edit_status_label_url(status_label)

        expect(response).to have_http_status(:ok)
      end
    end

    context "show page" do
      it "renders" do
        status_label = create(:status_label)
        get status_label_url({ slug: status_label.slug })
        expect(response).to have_http_status(:ok)
      end
    end
  end

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "creates a new StatusLabel and redirects to show page" do
        expect{
          post status_labels_url, params: valid_attributes
        }.to change(StatusLabel, :count).by(1)
        expect(response).to redirect_to(status_label_url(StatusLabel.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new StatusLabel" do
        expect {
          post status_labels_url, params: invalid_attributes
        }.not_to change(StatusLabel, :count)
      end

      it "redirects back to the new status_label page" do
        post status_labels_url, params: invalid_attributes
        expect(response).to redirect_to new_status_label_url
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the requested status_label and redirects to the show page" do
        name_change = "Changed"
        status_label = create(:status_label )
        patch status_label_url(status_label.slug), params: { status_label: { name: name_change } }

        status_label.reload

        expect(status_label.name).to eq(name_change)
        expect(response).to redirect_to(status_label_url(status_label))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit status_label page" do
        status_label = create(:status_label)
        patch status_label_url(status_label), params: invalid_attributes
        expect(response).to redirect_to edit_status_label_url(status_label)
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested status_label" do
      status_label = create(:status_label)
      expect {
        delete status_label_url({slug: status_label.slug})
      }.to change(StatusLabel, :count).by(-1)
    end

    it "redirects to the status_labels list" do
      status_label = create(:status_label)
      delete status_label_url({slug: status_label.slug})
      expect(response).to redirect_to(status_labels_url)
    end
  end
end
