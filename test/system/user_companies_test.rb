require "application_system_test_case"

class UserCompaniesTest < ApplicationSystemTestCase
  setup do
    @user_company = user_companies(:one)
  end

  test "visiting the index" do
    visit user_companies_url
    assert_selector "h1", text: "User Companies"
  end

  test "creating a User company" do
    visit user_companies_url
    click_on "New User Company"

    fill_in "Company", with: @user_company.company_id
    fill_in "Role", with: @user_company.role_id
    fill_in "User", with: @user_company.user_id
    click_on "Create User company"

    assert_text "User company was successfully created"
    click_on "Back"
  end

  test "updating a User company" do
    visit user_companies_url
    click_on "Edit", match: :first

    fill_in "Company", with: @user_company.company_id
    fill_in "Role", with: @user_company.role_id
    fill_in "User", with: @user_company.user_id
    click_on "Update User company"

    assert_text "User company was successfully updated"
    click_on "Back"
  end

  test "destroying a User company" do
    visit user_companies_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "User company was successfully destroyed"
  end
end
