require 'test_helper'

class InterfacesIpv6sControllerTest < ActionDispatch::IntegrationTest
  setup do
    @interfaces_ipv6 = interfaces_ipv6s(:one)
  end

  test "should get index" do
    get interfaces_ipv6s_url
    assert_response :success
  end

  test "should get new" do
    get new_interfaces_ipv6_url
    assert_response :success
  end

  test "should create interfaces_ipv6" do
    assert_difference('InterfacesIpv6.count') do
      post interfaces_ipv6s_url, params: { interfaces_ipv6: { active: @interfaces_ipv6.active, ipv6_address_id: @interfaces_ipv6.ipv6_address_id, network_interface_id: @interfaces_ipv6.network_interface_id } }
    end

    assert_redirected_to interfaces_ipv6_url(InterfacesIpv6.last)
  end

  test "should show interfaces_ipv6" do
    get interfaces_ipv6_url(@interfaces_ipv6)
    assert_response :success
  end

  test "should get edit" do
    get edit_interfaces_ipv6_url(@interfaces_ipv6)
    assert_response :success
  end

  test "should update interfaces_ipv6" do
    patch interfaces_ipv6_url(@interfaces_ipv6), params: { interfaces_ipv6: { active: @interfaces_ipv6.active, ipv6_address_id: @interfaces_ipv6.ipv6_address_id, network_interface_id: @interfaces_ipv6.network_interface_id } }
    assert_redirected_to interfaces_ipv6_url(@interfaces_ipv6)
  end

  test "should destroy interfaces_ipv6" do
    assert_difference('InterfacesIpv6.count', -1) do
      delete interfaces_ipv6_url(@interfaces_ipv6)
    end

    assert_redirected_to interfaces_ipv6s_url
  end
end
