require "application_system_test_case"

class IpLeasesTest < ApplicationSystemTestCase
  setup do
    @ip_lease = ip_leases(:one)
  end

  test "visiting the index" do
    visit ip_leases_url
    assert_selector "h1", text: "Ip Leases"
  end

  test "creating a Ip lease" do
    visit ip_leases_url
    click_on "New Ip Lease"

    check "Active" if @ip_lease.active
    fill_in "Ip", with: @ip_lease.ip
    fill_in "Nic", with: @ip_lease.nic_id
    click_on "Create Ip lease"

    assert_text "Ip lease was successfully created"
    click_on "Back"
  end

  test "updating a Ip lease" do
    visit ip_leases_url
    click_on "Edit", match: :first

    check "Active" if @ip_lease.active
    fill_in "Ip", with: @ip_lease.ip
    fill_in "Nic", with: @ip_lease.nic_id
    click_on "Update Ip lease"

    assert_text "Ip lease was successfully updated"
    click_on "Back"
  end

  test "destroying a Ip lease" do
    visit ip_leases_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Ip lease was successfully destroyed"
  end
end
