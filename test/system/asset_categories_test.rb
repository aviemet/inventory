require "application_system_test_case"

class AssetCategoriesTest < ApplicationSystemTestCase
  setup do
    @asset_category = asset_categories(:one)
  end

  test "visiting the index" do
    visit asset_categories_url
    assert_selector "h1", text: "Asset Categories"
  end

  test "creating a Asset category" do
    visit asset_categories_url
    click_on "New Asset Category"

    fill_in "Name", with: @asset_category.name
    click_on "Create Asset category"

    assert_text "Asset category was successfully created"
    click_on "Back"
  end

  test "updating a Asset category" do
    visit asset_categories_url
    click_on "Edit", match: :first

    fill_in "Name", with: @asset_category.name
    click_on "Update Asset category"

    assert_text "Asset category was successfully updated"
    click_on "Back"
  end

  test "destroying a Asset category" do
    visit asset_categories_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Asset category was successfully destroyed"
  end
end
