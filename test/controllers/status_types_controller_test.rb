require 'test_helper'

class StatusTypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @status_type = status_types(:one)
  end

  test "should get index" do
    get status_types_url
    assert_response :success
  end

  test "should get new" do
    get new_status_type_url
    assert_response :success
  end

  test "should create status_type" do
    assert_difference('StatusType.count') do
      post status_types_url, params: { status_type: { name: @status_type.name } }
    end

    assert_redirected_to status_type_url(StatusType.last)
  end

  test "should show status_type" do
    get status_type_url(@status_type)
    assert_response :success
  end

  test "should get edit" do
    get edit_status_type_url(@status_type)
    assert_response :success
  end

  test "should update status_type" do
    patch status_type_url(@status_type), params: { status_type: { name: @status_type.name } }
    assert_redirected_to status_type_url(@status_type)
  end

  test "should destroy status_type" do
    assert_difference('StatusType.count', -1) do
      delete status_type_url(@status_type)
    end

    assert_redirected_to status_types_url
  end
end
