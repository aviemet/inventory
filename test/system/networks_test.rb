require "application_system_test_case"

class NetworksTest < ApplicationSystemTestCase
  setup do
    @network = networks(:one)
  end

  test "visiting the index" do
    visit networks_url
    assert_selector "h1", text: "Networks"
  end

  test "creating a Network" do
    visit networks_url
    click_on "New Network"

    fill_in "Ipv4", with: @network.ipv4
    fill_in "Name", with: @network.name
    fill_in "V4 dhcp end", with: @network.v4_dhcp_end
    fill_in "V4 dhcp start", with: @network.v4_dhcp_start
    fill_in "V4 gateway", with: @network.v4_gateway
    fill_in "V4 mask", with: @network.v4_mask
    fill_in "Vland", with: @network.vland_id
    click_on "Create Network"

    assert_text "Network was successfully created"
    click_on "Back"
  end

  test "updating a Network" do
    visit networks_url
    click_on "Edit", match: :first

    fill_in "Ipv4", with: @network.ipv4
    fill_in "Name", with: @network.name
    fill_in "V4 dhcp end", with: @network.v4_dhcp_end
    fill_in "V4 dhcp start", with: @network.v4_dhcp_start
    fill_in "V4 gateway", with: @network.v4_gateway
    fill_in "V4 mask", with: @network.v4_mask
    fill_in "Vland", with: @network.vland_id
    click_on "Update Network"

    assert_text "Network was successfully updated"
    click_on "Back"
  end

  test "destroying a Network" do
    visit networks_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Network was successfully destroyed"
  end
end
