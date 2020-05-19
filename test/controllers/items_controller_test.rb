require 'test_helper'

class ItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @item = items(:one)
  end

  test "should get index" do
    get items_url
    assert_response :success
  end

  test "should get new" do
    get new_item_url
    assert_response :success
  end

  test "should create item" do
    assert_difference('Item.count') do
      post items_url, params: { item: { brand_id: @item.brand_id, consumeable: @item.consumeable, cpu: @item.cpu, cpu_speed: @item.cpu_speed, description: @item.description, gpu: @item.gpu, gpu_memory: @item.gpu_memory, gpu_speed: @item.gpu_speed, item_category_id: @item.item_category_id, memory: @item.memory, model: @item.model, notes: @item.notes, os: @item.os, qty: @item.qty, serial: @item.serial, storage: @item.storage, title: @item.title } }
    end

    assert_redirected_to item_url(Item.last)
  end

  test "should show item" do
    get item_url(@item)
    assert_response :success
  end

  test "should get edit" do
    get edit_item_url(@item)
    assert_response :success
  end

  test "should update item" do
    patch item_url(@item), params: { item: { brand_id: @item.brand_id, consumeable: @item.consumeable, cpu: @item.cpu, cpu_speed: @item.cpu_speed, description: @item.description, gpu: @item.gpu, gpu_memory: @item.gpu_memory, gpu_speed: @item.gpu_speed, item_category_id: @item.item_category_id, memory: @item.memory, model: @item.model, notes: @item.notes, os: @item.os, qty: @item.qty, serial: @item.serial, storage: @item.storage, title: @item.title } }
    assert_redirected_to item_url(@item)
  end

  test "should destroy item" do
    assert_difference('Item.count', -1) do
      delete item_url(@item)
    end

    assert_redirected_to items_url
  end
end
