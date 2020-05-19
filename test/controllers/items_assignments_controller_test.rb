require 'test_helper'

class ItemsAssignmentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @items_assignment = items_assignments(:one)
  end

  test "should get index" do
    get items_assignments_url
    assert_response :success
  end

  test "should get new" do
    get new_items_assignment_url
    assert_response :success
  end

  test "should create items_assignment" do
    assert_difference('ItemsAssignment.count') do
      post items_assignments_url, params: { items_assignment: { active: @items_assignment.active, department_id: @items_assignment.department_id, item_id: @items_assignment.item_id, person_id: @items_assignment.person_id } }
    end

    assert_redirected_to items_assignment_url(ItemsAssignment.last)
  end

  test "should show items_assignment" do
    get items_assignment_url(@items_assignment)
    assert_response :success
  end

  test "should get edit" do
    get edit_items_assignment_url(@items_assignment)
    assert_response :success
  end

  test "should update items_assignment" do
    patch items_assignment_url(@items_assignment), params: { items_assignment: { active: @items_assignment.active, department_id: @items_assignment.department_id, item_id: @items_assignment.item_id, person_id: @items_assignment.person_id } }
    assert_redirected_to items_assignment_url(@items_assignment)
  end

  test "should destroy items_assignment" do
    assert_difference('ItemsAssignment.count', -1) do
      delete items_assignment_url(@items_assignment)
    end

    assert_redirected_to items_assignments_url
  end
end
