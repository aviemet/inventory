require "application_system_test_case"

class CustomFieldsetAssociationsTest < ApplicationSystemTestCase
  setup do
    @custom_fieldset_association = custom_fieldset_associations(:one)
  end

  test "visiting the index" do
    visit custom_fieldset_associations_url
    assert_selector "h1", text: "Custom Fieldset Associations"
  end

  test "creating a Custom fieldset association" do
    visit custom_fieldset_associations_url
    click_on "New Custom Fieldset Association"

    fill_in "Custom fieldset", with: @custom_fieldset_association.custom_fieldset_id
    fill_in "Fieldable", with: @custom_fieldset_association.fieldable_id
    fill_in "Fieldable type", with: @custom_fieldset_association.fieldable_type
    click_on "Create Custom fieldset association"

    assert_text "Custom fieldset association was successfully created"
    click_on "Back"
  end

  test "updating a Custom fieldset association" do
    visit custom_fieldset_associations_url
    click_on "Edit", match: :first

    fill_in "Custom fieldset", with: @custom_fieldset_association.custom_fieldset_id
    fill_in "Fieldable", with: @custom_fieldset_association.fieldable_id
    fill_in "Fieldable type", with: @custom_fieldset_association.fieldable_type
    click_on "Update Custom fieldset association"

    assert_text "Custom fieldset association was successfully updated"
    click_on "Back"
  end

  test "destroying a Custom fieldset association" do
    visit custom_fieldset_associations_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Custom fieldset association was successfully destroyed"
  end
end
