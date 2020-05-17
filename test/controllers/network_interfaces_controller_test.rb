require 'test_helper'

class NetworkInterfacesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @network_interface = network_interfaces(:one)
  end

  test "should get index" do
    get network_interfaces_url
    assert_response :success
  end

  test "should get new" do
    get new_network_interface_url
    assert_response :success
  end

  test "should create network_interface" do
    assert_difference('NetworkInterface.count') do
      post network_interfaces_url, params: { network_interface: { item_id: @network_interface.item_id, mac: @network_interface.mac } }
    end

    assert_redirected_to network_interface_url(NetworkInterface.last)
  end

  test "should show network_interface" do
    get network_interface_url(@network_interface)
    assert_response :success
  end

  test "should get edit" do
    get edit_network_interface_url(@network_interface)
    assert_response :success
  end

  test "should update network_interface" do
    patch network_interface_url(@network_interface), params: { network_interface: { item_id: @network_interface.item_id, mac: @network_interface.mac } }
    assert_redirected_to network_interface_url(@network_interface)
  end

  test "should destroy network_interface" do
    assert_difference('NetworkInterface.count', -1) do
      delete network_interface_url(@network_interface)
    end

    assert_redirected_to network_interfaces_url
  end
end
