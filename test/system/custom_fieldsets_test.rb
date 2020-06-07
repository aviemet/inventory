require "application_system_test_case"

class CustomFieldsetsTest < ApplicationSystemTestCase
  setup do
    @custom_fieldset = custom_fieldsets(:one)
  end

  test "visiting the index" do
    visit custom_fieldsets_url
    assert_selector "h1", text: "Custom Fieldsets"
  end

  test "creating a Custom fieldset" do
    visit custom_fieldsets_url
    click_on "New Custom Fieldset"

    fill_in "Description", with: @custom_fieldset.description
    fill_in "Name", with: @custom_fieldset.name
    click_on "Create Custom fieldset"

    assert_text "Custom fieldset was successfully created"
    click_on "Back"
  end

  test "updating a Custom fieldset" do
    visit custom_fieldsets_url
    click_on "Edit", match: :first

    fill_in "Description", with: @custom_fieldset.description
    fill_in "Name", with: @custom_fieldset.name
    click_on "Update Custom fieldset"

    assert_text "Custom fieldset was successfully updated"
    click_on "Back"
  end

  test "destroying a Custom fieldset" do
    visit custom_fieldsets_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Custom fieldset was successfully destroyed"
  end
end
