require "application_system_test_case"

class AssetsAssignmentsTest < ApplicationSystemTestCase
  setup do
    @assets_assignment = assets_assignments(:one)
  end

  test "visiting the index" do
    visit assets_assignments_url
    assert_selector "h1", text: "Assets Assignments"
  end

  test "creating a Assets assignment" do
    visit assets_assignments_url
    click_on "New Assets Assignment"

    check "Active" if @assets_assignment.active
    fill_in "Asset", with: @assets_assignment.asset_id
    fill_in "Department", with: @assets_assignment.department_id
    fill_in "Person", with: @assets_assignment.person_id
    click_on "Create Assets assignment"

    assert_text "Assets assignment was successfully created"
    click_on "Back"
  end

  test "updating a Assets assignment" do
    visit assets_assignments_url
    click_on "Edit", match: :first

    check "Active" if @assets_assignment.active
    fill_in "Asset", with: @assets_assignment.asset_id
    fill_in "Department", with: @assets_assignment.department_id
    fill_in "Person", with: @assets_assignment.person_id
    click_on "Update Assets assignment"

    assert_text "Assets assignment was successfully updated"
    click_on "Back"
  end

  test "destroying a Assets assignment" do
    visit assets_assignments_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Assets assignment was successfully destroyed"
  end
end
