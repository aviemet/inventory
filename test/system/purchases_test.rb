require "application_system_test_case"

class PurchasesTest < ApplicationSystemTestCase
  setup do
    @purchase = purchases(:one)
  end

  test "visiting the index" do
    visit purchases_url
    assert_selector "h1", text: "Purchases"
  end

  test "creating a Purchase" do
    visit purchases_url
    click_on "New Purchase"

    fill_in "Asset", with: @purchase.asset_id
    fill_in "Notes", with: @purchase.notes
    fill_in "Price", with: @purchase.price
    fill_in "Purchased at", with: @purchase.purchased_at
    fill_in "Qty", with: @purchase.qty
    fill_in "Received at", with: @purchase.received_at
    fill_in "Shipping", with: @purchase.shipping
    fill_in "Tax", with: @purchase.tax
    fill_in "Vendor", with: @purchase.vendor_id
    click_on "Create Purchase"

    assert_text "Purchase was successfully created"
    click_on "Back"
  end

  test "updating a Purchase" do
    visit purchases_url
    click_on "Edit", match: :first

    fill_in "Asset", with: @purchase.asset_id
    fill_in "Notes", with: @purchase.notes
    fill_in "Price", with: @purchase.price
    fill_in "Purchased at", with: @purchase.purchased_at
    fill_in "Qty", with: @purchase.qty
    fill_in "Received at", with: @purchase.received_at
    fill_in "Shipping", with: @purchase.shipping
    fill_in "Tax", with: @purchase.tax
    fill_in "Vendor", with: @purchase.vendor_id
    click_on "Update Purchase"

    assert_text "Purchase was successfully updated"
    click_on "Back"
  end

  test "destroying a Purchase" do
    visit purchases_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Purchase was successfully destroyed"
  end
end
