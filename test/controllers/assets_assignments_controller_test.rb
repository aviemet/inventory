require 'test_helper'

class AssetsAssignmentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @assets_assignment = assets_assignments(:one)
  end

  test "should get index" do
    get assets_assignments_url
    assert_response :success
  end

  test "should get new" do
    get new_assets_assignment_url
    assert_response :success
  end

  test "should create assets_assignment" do
    assert_difference('AssetsAssignment.count') do
      post assets_assignments_url, params: { assets_assignment: { active: @assets_assignment.active, asset_id: @assets_assignment.asset_id, department_id: @assets_assignment.department_id, person_id: @assets_assignment.person_id } }
    end

    assert_redirected_to assets_assignment_url(AssetsAssignment.last)
  end

  test "should show assets_assignment" do
    get assets_assignment_url(@assets_assignment)
    assert_response :success
  end

  test "should get edit" do
    get edit_assets_assignment_url(@assets_assignment)
    assert_response :success
  end

  test "should update assets_assignment" do
    patch assets_assignment_url(@assets_assignment), params: { assets_assignment: { active: @assets_assignment.active, asset_id: @assets_assignment.asset_id, department_id: @assets_assignment.department_id, person_id: @assets_assignment.person_id } }
    assert_redirected_to assets_assignment_url(@assets_assignment)
  end

  test "should destroy assets_assignment" do
    assert_difference('AssetsAssignment.count', -1) do
      delete assets_assignment_url(@assets_assignment)
    end

    assert_redirected_to assets_assignments_url
  end
end
