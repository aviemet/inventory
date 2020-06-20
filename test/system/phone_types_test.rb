require "application_system_test_case"

class PhoneTypesTest < ApplicationSystemTestCase
  setup do
    @phone_type = phone_types(:one)
  end

  test "visiting the index" do
    visit phone_types_url
    assert_selector "h1", text: "Phone Types"
  end

  test "creating a Phone type" do
    visit phone_types_url
    click_on "New Phone Type"

    fill_in "Name", with: @phone_type.name
    click_on "Create Phone type"

    assert_text "Phone type was successfully created"
    click_on "Back"
  end

  test "updating a Phone type" do
    visit phone_types_url
    click_on "Edit", match: :first

    fill_in "Name", with: @phone_type.name
    click_on "Update Phone type"

    assert_text "Phone type was successfully updated"
    click_on "Back"
  end

  test "destroying a Phone type" do
    visit phone_types_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Phone type was successfully destroyed"
  end
end
