class CreateAccessories < ActiveRecord::Migration[6.0]
  def change
    create_table :accessories do |t|
      t.string :name
      t.string :serial
      t.string :model_number
      t.integer :min_qty
      t.integer :qty
      t.decimal :cost, precision: 10, scale: 2
      t.date :purchase_date
      t.boolean :requestable
      t.boolean :consumable
      t.text :notes
      t.references :manufacturer, null: false
      t.references :accessory_category, null: false, foreign_key: true
      t.references :vendor, null: true, foreign_key: true
      t.references :default_location, null: true, foreign_key: { to_table: :locations }

      t.timestamps
    end
  end
end
