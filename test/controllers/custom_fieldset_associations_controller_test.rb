require 'test_helper'

class CustomFieldsetAssociationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @custom_fieldset_association = custom_fieldset_associations(:one)
  end

  test "should get index" do
    get custom_fieldset_associations_url
    assert_response :success
  end

  test "should get new" do
    get new_custom_fieldset_association_url
    assert_response :success
  end

  test "should create custom_fieldset_association" do
    assert_difference('CustomFieldsetAssociation.count') do
      post custom_fieldset_associations_url, params: { custom_fieldset_association: { custom_fieldset_id: @custom_fieldset_association.custom_fieldset_id, fieldable_id: @custom_fieldset_association.fieldable_id, fieldable_type: @custom_fieldset_association.fieldable_type } }
    end

    assert_redirected_to custom_fieldset_association_url(CustomFieldsetAssociation.last)
  end

  test "should show custom_fieldset_association" do
    get custom_fieldset_association_url(@custom_fieldset_association)
    assert_response :success
  end

  test "should get edit" do
    get edit_custom_fieldset_association_url(@custom_fieldset_association)
    assert_response :success
  end

  test "should update custom_fieldset_association" do
    patch custom_fieldset_association_url(@custom_fieldset_association), params: { custom_fieldset_association: { custom_fieldset_id: @custom_fieldset_association.custom_fieldset_id, fieldable_id: @custom_fieldset_association.fieldable_id, fieldable_type: @custom_fieldset_association.fieldable_type } }
    assert_redirected_to custom_fieldset_association_url(@custom_fieldset_association)
  end

  test "should destroy custom_fieldset_association" do
    assert_difference('CustomFieldsetAssociation.count', -1) do
      delete custom_fieldset_association_url(@custom_fieldset_association)
    end

    assert_redirected_to custom_fieldset_associations_url
  end
end
