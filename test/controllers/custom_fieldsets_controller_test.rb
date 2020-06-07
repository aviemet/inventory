require 'test_helper'

class CustomFieldsetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @custom_fieldset = custom_fieldsets(:one)
  end

  test "should get index" do
    get custom_fieldsets_url
    assert_response :success
  end

  test "should get new" do
    get new_custom_fieldset_url
    assert_response :success
  end

  test "should create custom_fieldset" do
    assert_difference('CustomFieldset.count') do
      post custom_fieldsets_url, params: { custom_fieldset: { description: @custom_fieldset.description, name: @custom_fieldset.name } }
    end

    assert_redirected_to custom_fieldset_url(CustomFieldset.last)
  end

  test "should show custom_fieldset" do
    get custom_fieldset_url(@custom_fieldset)
    assert_response :success
  end

  test "should get edit" do
    get edit_custom_fieldset_url(@custom_fieldset)
    assert_response :success
  end

  test "should update custom_fieldset" do
    patch custom_fieldset_url(@custom_fieldset), params: { custom_fieldset: { description: @custom_fieldset.description, name: @custom_fieldset.name } }
    assert_redirected_to custom_fieldset_url(@custom_fieldset)
  end

  test "should destroy custom_fieldset" do
    assert_difference('CustomFieldset.count', -1) do
      delete custom_fieldset_url(@custom_fieldset)
    end

    assert_redirected_to custom_fieldsets_url
  end
end
