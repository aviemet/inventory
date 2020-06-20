require "application_system_test_case"

class NicsIpsTest < ApplicationSystemTestCase
  setup do
    @nics_ip = nics_ips(:one)
  end

  test "visiting the index" do
    visit nics_ips_url
    assert_selector "h1", text: "Nics Ips"
  end

  test "creating a Nics ip" do
    visit nics_ips_url
    click_on "New Nics Ip"

    check "Active" if @nics_ip.active
    fill_in "Ip", with: @nics_ip.ip_id
    fill_in "Nic", with: @nics_ip.nic_id
    click_on "Create Nics ip"

    assert_text "Nics ip was successfully created"
    click_on "Back"
  end

  test "updating a Nics ip" do
    visit nics_ips_url
    click_on "Edit", match: :first

    check "Active" if @nics_ip.active
    fill_in "Ip", with: @nics_ip.ip_id
    fill_in "Nic", with: @nics_ip.nic_id
    click_on "Update Nics ip"

    assert_text "Nics ip was successfully updated"
    click_on "Back"
  end

  test "destroying a Nics ip" do
    visit nics_ips_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Nics ip was successfully destroyed"
  end
end
