require "application_system_test_case"

class NetworkInterfacesTest < ApplicationSystemTestCase
  setup do
    @network_interface = network_interfaces(:one)
  end

  test "visiting the index" do
    visit network_interfaces_url
    assert_selector "h1", text: "Network Interfaces"
  end

  test "creating a Network interface" do
    visit network_interfaces_url
    click_on "New Network Interface"

    fill_in "Item", with: @network_interface.item_id
    fill_in "Mac", with: @network_interface.mac
    click_on "Create Network interface"

    assert_text "Network interface was successfully created"
    click_on "Back"
  end

  test "updating a Network interface" do
    visit network_interfaces_url
    click_on "Edit", match: :first

    fill_in "Item", with: @network_interface.item_id
    fill_in "Mac", with: @network_interface.mac
    click_on "Update Network interface"

    assert_text "Network interface was successfully updated"
    click_on "Back"
  end

  test "destroying a Network interface" do
    visit network_interfaces_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Network interface was successfully destroyed"
  end
end
