module Types
  class ItemType < Types::BaseObject
    global_id_field :id
    field :title, String, null: true
    field :model, String, null: true
    field :serial, String, null: true
    field :description, String, null: true
    field :notes, String, null: true
    field :consumeable, Boolean, null: true
    field :qty, Integer, null: true
    field :os, String, null: true
    field :memory, Float, null: true
    field :storage, Float, null: true
    field :cpu, String, null: true
    field :cpu_speed, Float, null: true
    field :gpu, String, null: true
    field :gpu_speed, Float, null: true
    field :gpu_memory, Float, null: true
    
    field :category, Types::ItemCategoryType, null: true
    field :brand, Types::BrandType, null: true
  end
end
