require 'test_helper'

class NicsIpsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @nics_ip = nics_ips(:one)
  end

  test "should get index" do
    get nics_ips_url
    assert_response :success
  end

  test "should get new" do
    get new_nics_ip_url
    assert_response :success
  end

  test "should create nics_ip" do
    assert_difference('NicsIp.count') do
      post nics_ips_url, params: { nics_ip: { active: @nics_ip.active, ip_id: @nics_ip.ip_id, nic_id: @nics_ip.nic_id } }
    end

    assert_redirected_to nics_ip_url(NicsIp.last)
  end

  test "should show nics_ip" do
    get nics_ip_url(@nics_ip)
    assert_response :success
  end

  test "should get edit" do
    get edit_nics_ip_url(@nics_ip)
    assert_response :success
  end

  test "should update nics_ip" do
    patch nics_ip_url(@nics_ip), params: { nics_ip: { active: @nics_ip.active, ip_id: @nics_ip.ip_id, nic_id: @nics_ip.nic_id } }
    assert_redirected_to nics_ip_url(@nics_ip)
  end

  test "should destroy nics_ip" do
    assert_difference('NicsIp.count', -1) do
      delete nics_ip_url(@nics_ip)
    end

    assert_redirected_to nics_ips_url
  end
end
