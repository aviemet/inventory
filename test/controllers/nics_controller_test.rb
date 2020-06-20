require 'test_helper'

class NicsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @nic = nics(:one)
  end

  test "should get index" do
    get nics_url
    assert_response :success
  end

  test "should get new" do
    get new_nic_url
    assert_response :success
  end

  test "should create nic" do
    assert_difference('Nic.count') do
      post nics_url, params: { nic: { item_id: @nic.item_id, mac: @nic.mac } }
    end

    assert_redirected_to nic_url(Nic.last)
  end

  test "should show nic" do
    get nic_url(@nic)
    assert_response :success
  end

  test "should get edit" do
    get edit_nic_url(@nic)
    assert_response :success
  end

  test "should update nic" do
    patch nic_url(@nic), params: { nic: { item_id: @nic.item_id, mac: @nic.mac } }
    assert_redirected_to nic_url(@nic)
  end

  test "should destroy nic" do
    assert_difference('Nic.count', -1) do
      delete nic_url(@nic)
    end

    assert_redirected_to nics_url
  end
end
