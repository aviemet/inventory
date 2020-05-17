require "application_system_test_case"

class Ipv4AddressesTest < ApplicationSystemTestCase
  setup do
    @ipv4_address = ipv4_addresses(:one)
  end

  test "visiting the index" do
    visit ipv4_addresses_url
    assert_selector "h1", text: "Ipv4 Addresses"
  end

  test "creating a Ipv4 address" do
    visit ipv4_addresses_url
    click_on "New Ipv4 Address"

    fill_in "Address", with: @ipv4_address.address
    click_on "Create Ipv4 address"

    assert_text "Ipv4 address was successfully created"
    click_on "Back"
  end

  test "updating a Ipv4 address" do
    visit ipv4_addresses_url
    click_on "Edit", match: :first

    fill_in "Address", with: @ipv4_address.address
    click_on "Update Ipv4 address"

    assert_text "Ipv4 address was successfully updated"
    click_on "Back"
  end

  test "destroying a Ipv4 address" do
    visit ipv4_addresses_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Ipv4 address was successfully destroyed"
  end
end
