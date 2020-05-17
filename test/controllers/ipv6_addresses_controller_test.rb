require 'test_helper'

class Ipv6AddressesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ipv6_address = ipv6_addresses(:one)
  end

  test "should get index" do
    get ipv6_addresses_url
    assert_response :success
  end

  test "should get new" do
    get new_ipv6_address_url
    assert_response :success
  end

  test "should create ipv6_address" do
    assert_difference('Ipv6Address.count') do
      post ipv6_addresses_url, params: { ipv6_address: { address: @ipv6_address.address } }
    end

    assert_redirected_to ipv6_address_url(Ipv6Address.last)
  end

  test "should show ipv6_address" do
    get ipv6_address_url(@ipv6_address)
    assert_response :success
  end

  test "should get edit" do
    get edit_ipv6_address_url(@ipv6_address)
    assert_response :success
  end

  test "should update ipv6_address" do
    patch ipv6_address_url(@ipv6_address), params: { ipv6_address: { address: @ipv6_address.address } }
    assert_redirected_to ipv6_address_url(@ipv6_address)
  end

  test "should destroy ipv6_address" do
    assert_difference('Ipv6Address.count', -1) do
      delete ipv6_address_url(@ipv6_address)
    end

    assert_redirected_to ipv6_addresses_url
  end
end
