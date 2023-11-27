require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "/models" do
  def valid_attributes
    {
      model: attributes_for(:model, {
        category_id: create(:category).id,
        manufacturer_id: create(:manufacturer).id
      },)
    }
  end

  def invalid_attributes
    {
      model: {
        name: "",
      }
    }
  end

  describe "GET /" do
    login_admin

    context "index page" do
      it "lists all models" do
        model = create(:model, { company: User.first.active_company })

        get models_url

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(model.name))
      end
    end

    context "index page with search params" do
      it "returns a filtered list of models" do
        model1 = create(:model, { name: "Include", company: User.first.active_company })
        model2 = create(:model, { name: "Exclue", company: User.first.active_company })

        get models_url, params: { search: model1.name }

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(model1.name))
        expect(response.body).not_to include(CGI.escapeHTML(model2.name))
      end
    end

    context "new page" do
      it "displays form to create a new model" do
        get new_model_url

        expect(response).to have_http_status(:ok)
      end
    end

    context "edit page" do
      it "displays form to edit a model" do
        model = create(:model, company: User.first.active_company)

        get edit_model_url(model)

        expect(response).to have_http_status(:ok)
      end
    end

    context "show page" do
      it "renders" do
        model = create(:model, company: @admin.active_company)
        get model_url({ slug: model.slug })
        expect(response).to have_http_status(:ok)
      end
    end
  end

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "creates a new Model and redirects to show page" do
        expect{
          post models_url, params: valid_attributes
        }.to change(Model, :count).by(1)
        expect(response).to redirect_to(model_url(Model.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Model" do
        expect {
          post models_url, params: invalid_attributes
        }.not_to change(Model, :count)
      end

      it "redirects back to the new model page" do
        post models_url, params: invalid_attributes
        expect(response).to redirect_to new_model_url
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the requested model and redirects to the show page" do
        name_change = "Changed"
        model = create(:model, company: User.first.active_company )
        patch model_url(model.slug), params: { model: { name: name_change } }

        model.reload

        expect(model.name).to eq(name_change)
        expect(response).to redirect_to(model_url(model))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit model page" do
        model = create(:model, company: User.first.active_company)
        patch model_url(model), params: invalid_attributes
        expect(response).to redirect_to edit_model_url(model)
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested model" do
      model = create(:model, company: User.first.active_company)
      expect {
        delete model_url({slug: model.slug})
      }.to change(Model, :count).by(-1)
    end

    it "redirects to the models list" do
      model = create(:model, company: User.first.active_company)
      delete model_url({slug: model.slug})
      expect(response).to redirect_to(models_url)
    end
  end
end
