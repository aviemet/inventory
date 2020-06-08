require "application_system_test_case"

class StatusTypesTest < ApplicationSystemTestCase
  setup do
    @status_type = status_types(:one)
  end

  test "visiting the index" do
    visit status_types_url
    assert_selector "h1", text: "Status Types"
  end

  test "creating a Status type" do
    visit status_types_url
    click_on "New Status Type"

    fill_in "Name", with: @status_type.name
    click_on "Create Status type"

    assert_text "Status type was successfully created"
    click_on "Back"
  end

  test "updating a Status type" do
    visit status_types_url
    click_on "Edit", match: :first

    fill_in "Name", with: @status_type.name
    click_on "Update Status type"

    assert_text "Status type was successfully updated"
    click_on "Back"
  end

  test "destroying a Status type" do
    visit status_types_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Status type was successfully destroyed"
  end
end
