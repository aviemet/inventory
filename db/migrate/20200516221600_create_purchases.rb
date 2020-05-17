class CreatePurchases < ActiveRecord::Migration[6.0]
  def change
    create_table :purchases do |t|
      t.references :asset, null: false, foreign_key: true
      t.decimal :price, precision: 10, scale: 2
      t.decimal :shipping, precision: 10, scale: 2
      t.decimal :tax, precision: 10, scale: 2
      t.integer :qty
      t.references :vendor, null: false, foreign_key: true
      t.text :notes
      t.datetime :purchased_at
      t.datetime :received_at

      t.timestamps
    end
  end
end
