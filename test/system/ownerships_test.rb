require "application_system_test_case"

class OwnershipsTest < ApplicationSystemTestCase
  setup do
    @ownership = ownerships(:one)
  end

  test "visiting the index" do
    visit ownerships_url
    assert_selector "h1", text: "Ownerships"
  end

  test "creating a Ownership" do
    visit ownerships_url
    click_on "New Ownership"

    fill_in "Company", with: @ownership.company_id
    fill_in "Ownable", with: @ownership.ownable_id
    fill_in "Ownable type", with: @ownership.ownable_type
    click_on "Create Ownership"

    assert_text "Ownership was successfully created"
    click_on "Back"
  end

  test "updating a Ownership" do
    visit ownerships_url
    click_on "Edit", match: :first

    fill_in "Company", with: @ownership.company_id
    fill_in "Ownable", with: @ownership.ownable_id
    fill_in "Ownable type", with: @ownership.ownable_type
    click_on "Update Ownership"

    assert_text "Ownership was successfully updated"
    click_on "Back"
  end

  test "destroying a Ownership" do
    visit ownerships_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Ownership was successfully destroyed"
  end
end
