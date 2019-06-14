class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.text :title
      t.text :mode
      t.text :serial
      t.text :description
      t.text :notes
      t.boolean :consumeable
      t.integer :qty
      t.text :os
      t.decimal :memory
      t.decimal :storage
      t.text :cpu
      t.decimal :cpu_speed
      t.text :gpu
      t.decimal :gpu_speed
      t.decimal :gpu_memory
      t.references :category, foreign_key: true
      t.references :brand, foreign_key: true

      t.timestamps
    end
  end
end
