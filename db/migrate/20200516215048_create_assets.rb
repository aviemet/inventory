class CreateAssets < ActiveRecord::Migration[6.0]
  def change
    create_table :assets do |t|
      t.string :title
      t.string :model
      t.string :serial
      t.text :description
      t.text :notes
      t.boolean :consumeable, default: false
      t.integer :qty
      t.string :os
      t.decimal :memory
      t.decimal :storage
      t.string :cpu
      t.decimal :cpu_speed
      t.string :gpu
      t.decimal :gpu_speed
      t.decimal :gpu_memory
      t.references :asset_category, null: false, foreign_key: true
      t.references :brand, null: false, foreign_key: true

      t.timestamps
    end
  end
end
