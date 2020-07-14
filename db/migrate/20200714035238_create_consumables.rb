class CreateConsumables < ActiveRecord::Migration[6.0]
  def change
    create_table :consumables do |t|
      t.string :name
      t.string :model_number
      t.integer :min_qty
      t.integer :qty
      t.decimal :cost, precision: 10, scale: 2
      t.boolean :requestable
      t.text :notes
      t.references :manufacturer, null: false, foreign_key: true
      t.references :consumable_category, null: false, foreign_key: true
      t.references :vendor, null: false, foreign_key: true
      t.references :default_location, null: false, foreign_key: { to_table: :locations }

      t.timestamps
    end
  end
end
