require 'test_helper'

class PhoneTypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @phone_type = phone_types(:one)
  end

  test "should get index" do
    get phone_types_url
    assert_response :success
  end

  test "should get new" do
    get new_phone_type_url
    assert_response :success
  end

  test "should create phone_type" do
    assert_difference('PhoneType.count') do
      post phone_types_url, params: { phone_type: { name: @phone_type.name } }
    end

    assert_redirected_to phone_type_url(PhoneType.last)
  end

  test "should show phone_type" do
    get phone_type_url(@phone_type)
    assert_response :success
  end

  test "should get edit" do
    get edit_phone_type_url(@phone_type)
    assert_response :success
  end

  test "should update phone_type" do
    patch phone_type_url(@phone_type), params: { phone_type: { name: @phone_type.name } }
    assert_redirected_to phone_type_url(@phone_type)
  end

  test "should destroy phone_type" do
    assert_difference('PhoneType.count', -1) do
      delete phone_type_url(@phone_type)
    end

    assert_redirected_to phone_types_url
  end
end
