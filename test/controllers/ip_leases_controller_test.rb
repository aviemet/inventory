require 'test_helper'

class IpLeasesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ip_lease = ip_leases(:one)
  end

  test "should get index" do
    get ip_leases_url
    assert_response :success
  end

  test "should get new" do
    get new_ip_lease_url
    assert_response :success
  end

  test "should create ip_lease" do
    assert_difference('IpLease.count') do
      post ip_leases_url, params: { ip_lease: { active: @ip_lease.active, ip: @ip_lease.ip, nic_id: @ip_lease.nic_id } }
    end

    assert_redirected_to ip_lease_url(IpLease.last)
  end

  test "should show ip_lease" do
    get ip_lease_url(@ip_lease)
    assert_response :success
  end

  test "should get edit" do
    get edit_ip_lease_url(@ip_lease)
    assert_response :success
  end

  test "should update ip_lease" do
    patch ip_lease_url(@ip_lease), params: { ip_lease: { active: @ip_lease.active, ip: @ip_lease.ip, nic_id: @ip_lease.nic_id } }
    assert_redirected_to ip_lease_url(@ip_lease)
  end

  test "should destroy ip_lease" do
    assert_difference('IpLease.count', -1) do
      delete ip_lease_url(@ip_lease)
    end

    assert_redirected_to ip_leases_url
  end
end
