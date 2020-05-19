require "application_system_test_case"

class ItemsAssignmentsTest < ApplicationSystemTestCase
  setup do
    @items_assignment = items_assignments(:one)
  end

  test "visiting the index" do
    visit items_assignments_url
    assert_selector "h1", text: "Items Assignments"
  end

  test "creating a Items assignment" do
    visit items_assignments_url
    click_on "New Items Assignment"

    check "Active" if @items_assignment.active
    fill_in "Department", with: @items_assignment.department_id
    fill_in "Item", with: @items_assignment.item_id
    fill_in "Person", with: @items_assignment.person_id
    click_on "Create Items assignment"

    assert_text "Items assignment was successfully created"
    click_on "Back"
  end

  test "updating a Items assignment" do
    visit items_assignments_url
    click_on "Edit", match: :first

    check "Active" if @items_assignment.active
    fill_in "Department", with: @items_assignment.department_id
    fill_in "Item", with: @items_assignment.item_id
    fill_in "Person", with: @items_assignment.person_id
    click_on "Update Items assignment"

    assert_text "Items assignment was successfully updated"
    click_on "Back"
  end

  test "destroying a Items assignment" do
    visit items_assignments_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Items assignment was successfully destroyed"
  end
end
