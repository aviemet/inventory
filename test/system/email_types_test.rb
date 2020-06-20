require "application_system_test_case"

class EmailTypesTest < ApplicationSystemTestCase
  setup do
    @email_type = email_types(:one)
  end

  test "visiting the index" do
    visit email_types_url
    assert_selector "h1", text: "Email Types"
  end

  test "creating a Email type" do
    visit email_types_url
    click_on "New Email Type"

    fill_in "Name", with: @email_type.name
    click_on "Create Email type"

    assert_text "Email type was successfully created"
    click_on "Back"
  end

  test "updating a Email type" do
    visit email_types_url
    click_on "Edit", match: :first

    fill_in "Name", with: @email_type.name
    click_on "Update Email type"

    assert_text "Email type was successfully updated"
    click_on "Back"
  end

  test "destroying a Email type" do
    visit email_types_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Email type was successfully destroyed"
  end
end
