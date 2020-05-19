require "application_system_test_case"

class ItemsTest < ApplicationSystemTestCase
  setup do
    @item = items(:one)
  end

  test "visiting the index" do
    visit items_url
    assert_selector "h1", text: "Items"
  end

  test "creating a Item" do
    visit items_url
    click_on "New Item"

    fill_in "Brand", with: @item.brand_id
    check "Consumeable" if @item.consumeable
    fill_in "Cpu", with: @item.cpu
    fill_in "Cpu speed", with: @item.cpu_speed
    fill_in "Description", with: @item.description
    fill_in "Gpu", with: @item.gpu
    fill_in "Gpu memory", with: @item.gpu_memory
    fill_in "Gpu speed", with: @item.gpu_speed
    fill_in "Item category", with: @item.item_category_id
    fill_in "Memory", with: @item.memory
    fill_in "Model", with: @item.model
    fill_in "Notes", with: @item.notes
    fill_in "Os", with: @item.os
    fill_in "Qty", with: @item.qty
    fill_in "Serial", with: @item.serial
    fill_in "Storage", with: @item.storage
    fill_in "Title", with: @item.title
    click_on "Create Item"

    assert_text "Item was successfully created"
    click_on "Back"
  end

  test "updating a Item" do
    visit items_url
    click_on "Edit", match: :first

    fill_in "Brand", with: @item.brand_id
    check "Consumeable" if @item.consumeable
    fill_in "Cpu", with: @item.cpu
    fill_in "Cpu speed", with: @item.cpu_speed
    fill_in "Description", with: @item.description
    fill_in "Gpu", with: @item.gpu
    fill_in "Gpu memory", with: @item.gpu_memory
    fill_in "Gpu speed", with: @item.gpu_speed
    fill_in "Item category", with: @item.item_category_id
    fill_in "Memory", with: @item.memory
    fill_in "Model", with: @item.model
    fill_in "Notes", with: @item.notes
    fill_in "Os", with: @item.os
    fill_in "Qty", with: @item.qty
    fill_in "Serial", with: @item.serial
    fill_in "Storage", with: @item.storage
    fill_in "Title", with: @item.title
    click_on "Update Item"

    assert_text "Item was successfully updated"
    click_on "Back"
  end

  test "destroying a Item" do
    visit items_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Item was successfully destroyed"
  end
end
