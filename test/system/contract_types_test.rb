require "application_system_test_case"

class ContractTypesTest < ApplicationSystemTestCase
  setup do
    @contract_type = contract_types(:one)
  end

  test "visiting the index" do
    visit contract_types_url
    assert_selector "h1", text: "Contract Types"
  end

  test "creating a Contract type" do
    visit contract_types_url
    click_on "New Contract Type"

    fill_in "Name", with: @contract_type.name
    click_on "Create Contract type"

    assert_text "Contract type was successfully created"
    click_on "Back"
  end

  test "updating a Contract type" do
    visit contract_types_url
    click_on "Edit", match: :first

    fill_in "Name", with: @contract_type.name
    click_on "Update Contract type"

    assert_text "Contract type was successfully updated"
    click_on "Back"
  end

  test "destroying a Contract type" do
    visit contract_types_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Contract type was successfully destroyed"
  end
end
