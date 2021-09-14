class CreateComponents < ActiveRecord::Migration[6.1]
  def change
    create_table :components do |t|
      t.string :name
      t.string :serial, index: { unique: true }
      t.integer :min_qty
      t.integer :qty
      t.monetize :cost, amount: { null: true, default: nil }
      t.datetime :purchased_at
      t.text :notes
      t.references :model, null: false, foreign_key: true
      t.references :vendor, null: false, foreign_key: true
      t.references :default_location, null: true, foreign_key: { to_table: :locations }

      t.timestamps
    end
  end
end
