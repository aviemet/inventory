require "application_system_test_case"

class Ipv6AddressesTest < ApplicationSystemTestCase
  setup do
    @ipv6_address = ipv6_addresses(:one)
  end

  test "visiting the index" do
    visit ipv6_addresses_url
    assert_selector "h1", text: "Ipv6 Addresses"
  end

  test "creating a Ipv6 address" do
    visit ipv6_addresses_url
    click_on "New Ipv6 Address"

    fill_in "Address", with: @ipv6_address.address
    click_on "Create Ipv6 address"

    assert_text "Ipv6 address was successfully created"
    click_on "Back"
  end

  test "updating a Ipv6 address" do
    visit ipv6_addresses_url
    click_on "Edit", match: :first

    fill_in "Address", with: @ipv6_address.address
    click_on "Update Ipv6 address"

    assert_text "Ipv6 address was successfully updated"
    click_on "Back"
  end

  test "destroying a Ipv6 address" do
    visit ipv6_addresses_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Ipv6 address was successfully destroyed"
  end
end
