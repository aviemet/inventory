require 'test_helper'

class Ipv4AddressesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ipv4_address = ipv4_addresses(:one)
  end

  test "should get index" do
    get ipv4_addresses_url
    assert_response :success
  end

  test "should get new" do
    get new_ipv4_address_url
    assert_response :success
  end

  test "should create ipv4_address" do
    assert_difference('Ipv4Address.count') do
      post ipv4_addresses_url, params: { ipv4_address: { address: @ipv4_address.address } }
    end

    assert_redirected_to ipv4_address_url(Ipv4Address.last)
  end

  test "should show ipv4_address" do
    get ipv4_address_url(@ipv4_address)
    assert_response :success
  end

  test "should get edit" do
    get edit_ipv4_address_url(@ipv4_address)
    assert_response :success
  end

  test "should update ipv4_address" do
    patch ipv4_address_url(@ipv4_address), params: { ipv4_address: { address: @ipv4_address.address } }
    assert_redirected_to ipv4_address_url(@ipv4_address)
  end

  test "should destroy ipv4_address" do
    assert_difference('Ipv4Address.count', -1) do
      delete ipv4_address_url(@ipv4_address)
    end

    assert_redirected_to ipv4_addresses_url
  end
end
