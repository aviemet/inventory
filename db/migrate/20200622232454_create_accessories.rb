class CreateAccessories < ActiveRecord::Migration[6.0]
  def change
    create_table :accessories do |t|
      t.string :name
      t.string :serial
      t.string :model_number
      t.integer :min_qty
      t.integer :qty
      t.monetize :cost, amount: { null: true, default: nil }
      t.boolean :requestable
      t.text :notes
      t.references :category, null: false, foreign_key: true
      t.references :manufacturer, null: false, foreign_key: true
      t.references :vendor, null: true, foreign_key: true
      t.references :default_location, null: true, foreign_key: { to_table: :locations }

      t.timestamps
    end
  end
end
