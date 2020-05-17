require 'test_helper'

class InterfacesIpv4sControllerTest < ActionDispatch::IntegrationTest
  setup do
    @interfaces_ipv4 = interfaces_ipv4s(:one)
  end

  test "should get index" do
    get interfaces_ipv4s_url
    assert_response :success
  end

  test "should get new" do
    get new_interfaces_ipv4_url
    assert_response :success
  end

  test "should create interfaces_ipv4" do
    assert_difference('InterfacesIpv4.count') do
      post interfaces_ipv4s_url, params: { interfaces_ipv4: { active: @interfaces_ipv4.active, ipv4_address_id: @interfaces_ipv4.ipv4_address_id, network_interface_id: @interfaces_ipv4.network_interface_id } }
    end

    assert_redirected_to interfaces_ipv4_url(InterfacesIpv4.last)
  end

  test "should show interfaces_ipv4" do
    get interfaces_ipv4_url(@interfaces_ipv4)
    assert_response :success
  end

  test "should get edit" do
    get edit_interfaces_ipv4_url(@interfaces_ipv4)
    assert_response :success
  end

  test "should update interfaces_ipv4" do
    patch interfaces_ipv4_url(@interfaces_ipv4), params: { interfaces_ipv4: { active: @interfaces_ipv4.active, ipv4_address_id: @interfaces_ipv4.ipv4_address_id, network_interface_id: @interfaces_ipv4.network_interface_id } }
    assert_redirected_to interfaces_ipv4_url(@interfaces_ipv4)
  end

  test "should destroy interfaces_ipv4" do
    assert_difference('InterfacesIpv4.count', -1) do
      delete interfaces_ipv4_url(@interfaces_ipv4)
    end

    assert_redirected_to interfaces_ipv4s_url
  end
end
