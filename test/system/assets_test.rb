require "application_system_test_case"

class AssetsTest < ApplicationSystemTestCase
  setup do
    @asset = assets(:one)
  end

  test "visiting the index" do
    visit assets_url
    assert_selector "h1", text: "Assets"
  end

  test "creating a Asset" do
    visit assets_url
    click_on "New Asset"

    fill_in "Asset category", with: @asset.asset_category_id
    fill_in "Brand", with: @asset.brand_id
    check "Consumeable" if @asset.consumeable
    fill_in "Cpu", with: @asset.cpu
    fill_in "Cpu speed", with: @asset.cpu_speed
    fill_in "Description", with: @asset.description
    fill_in "Gpu", with: @asset.gpu
    fill_in "Gpu memory", with: @asset.gpu_memory
    fill_in "Gpu speed", with: @asset.gpu_speed
    fill_in "Memory", with: @asset.memory
    fill_in "Model", with: @asset.model
    fill_in "Notes", with: @asset.notes
    fill_in "Os", with: @asset.os
    fill_in "Qty", with: @asset.qty
    fill_in "Serial", with: @asset.serial
    fill_in "Storage", with: @asset.storage
    fill_in "Title", with: @asset.title
    click_on "Create Asset"

    assert_text "Asset was successfully created"
    click_on "Back"
  end

  test "updating a Asset" do
    visit assets_url
    click_on "Edit", match: :first

    fill_in "Asset category", with: @asset.asset_category_id
    fill_in "Brand", with: @asset.brand_id
    check "Consumeable" if @asset.consumeable
    fill_in "Cpu", with: @asset.cpu
    fill_in "Cpu speed", with: @asset.cpu_speed
    fill_in "Description", with: @asset.description
    fill_in "Gpu", with: @asset.gpu
    fill_in "Gpu memory", with: @asset.gpu_memory
    fill_in "Gpu speed", with: @asset.gpu_speed
    fill_in "Memory", with: @asset.memory
    fill_in "Model", with: @asset.model
    fill_in "Notes", with: @asset.notes
    fill_in "Os", with: @asset.os
    fill_in "Qty", with: @asset.qty
    fill_in "Serial", with: @asset.serial
    fill_in "Storage", with: @asset.storage
    fill_in "Title", with: @asset.title
    click_on "Update Asset"

    assert_text "Asset was successfully updated"
    click_on "Back"
  end

  test "destroying a Asset" do
    visit assets_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Asset was successfully destroyed"
  end
end
