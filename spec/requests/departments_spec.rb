require 'rails_helper'
require_relative '../support/devise'

RSpec.describe "/departments", type: :request do
  def valid_attributes
    {
      department: attributes_for(:department)
    }
  end

  def invalid_attributes
    {
      department: {
        name: "",
      }
    }
  end

  describe "GET /" do
    login_admin

    context "index page" do
      it "lists all departments" do
        department = create(:department, { company: @admin.active_company })

        get departments_url

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(department.name))
      end
    end

    context "index page with search params" do
      it "returns a filtered list of departments" do
        department1 = create(:department, { name: "Include", company: @admin.active_company })
        department2 = create(:department, { name: "Exclue", company: @admin.active_company })

        get departments_url, params: { search: department1.name }

        expect(response).to have_http_status(:ok)
        expect(response.body).to include(CGI.escapeHTML(department1.name))
        expect(response.body).not_to include(CGI.escapeHTML(department2.name))
      end
    end

    context "new page" do
      it "displays form to create a new department" do
        get new_department_url

        expect(response).to have_http_status(:ok)
      end
    end

    context "edit page" do
      it "displays form to edit a department" do
        department = create(:department, company: @admin.active_company)

        get edit_department_url(department)

        expect(response).to have_http_status(:ok)
      end
    end

    context "show page" do
      it "renders" do
        department = create(:department, company: @admin.active_company)
        get department_url({ slug: department.slug })
        expect(response).to have_http_status(:ok)
      end
    end
  end

  describe "POST /create" do
    login_admin

    context "with valid parameters" do
      it "creates a new Department and redirects to show page" do
        expect{
          post departments_url, params: valid_attributes
        }.to change(Department, :count).by(1)
        expect(response).to redirect_to(department_url(Department.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Department" do
        expect {
          post departments_url, params: invalid_attributes
        }.to change(Department, :count).by(0)
      end

      it "redirects back to the new department page" do
        post departments_url, params: invalid_attributes
        expect(response).to redirect_to new_department_url
      end
    end
  end

  describe "PATCH /update" do
    login_admin

    context "with valid parameters" do
      it "updates the requested department and redirects to the show page" do
        name_change = "Changed"
        department = create(:department, company: @admin.active_company )
        patch department_url(department.slug), params: { department: { name: name_change } }

        department.reload

        expect(department.name).to eq(name_change)
        expect(response).to redirect_to(department_url(department))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit department page" do
        department = create(:department, company: @admin.active_company)
        patch department_url(department), params: invalid_attributes
        expect(response).to redirect_to edit_department_url(department)
      end
    end
  end

  describe "DELETE /destroy" do
    login_admin

    it "destroys the requested department" do
      department = create(:department, company: @admin.active_company)
      expect {
        delete department_url({slug: department.slug})
      }.to change(Department, :count).by(-1)
    end

    it "redirects to the departments list" do
      department = create(:department, company: @admin.active_company)
      delete department_url({slug: department.slug})
      expect(response).to redirect_to(departments_url)
    end
  end
end
