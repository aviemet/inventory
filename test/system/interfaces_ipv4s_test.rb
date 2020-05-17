require "application_system_test_case"

class InterfacesIpv4sTest < ApplicationSystemTestCase
  setup do
    @interfaces_ipv4 = interfaces_ipv4s(:one)
  end

  test "visiting the index" do
    visit interfaces_ipv4s_url
    assert_selector "h1", text: "Interfaces Ipv4s"
  end

  test "creating a Interfaces ipv4" do
    visit interfaces_ipv4s_url
    click_on "New Interfaces Ipv4"

    check "Active" if @interfaces_ipv4.active
    fill_in "Ipv4 address", with: @interfaces_ipv4.ipv4_address_id
    fill_in "Network interface", with: @interfaces_ipv4.network_interface_id
    click_on "Create Interfaces ipv4"

    assert_text "Interfaces ipv4 was successfully created"
    click_on "Back"
  end

  test "updating a Interfaces ipv4" do
    visit interfaces_ipv4s_url
    click_on "Edit", match: :first

    check "Active" if @interfaces_ipv4.active
    fill_in "Ipv4 address", with: @interfaces_ipv4.ipv4_address_id
    fill_in "Network interface", with: @interfaces_ipv4.network_interface_id
    click_on "Update Interfaces ipv4"

    assert_text "Interfaces ipv4 was successfully updated"
    click_on "Back"
  end

  test "destroying a Interfaces ipv4" do
    visit interfaces_ipv4s_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Interfaces ipv4 was successfully destroyed"
  end
end
