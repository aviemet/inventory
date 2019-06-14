class CreatePurchases < ActiveRecord::Migration[5.2]
  def change
    create_table :purchases do |t|
      t.references :item, foreign_key: true
      t.decimal :price, precision: 10, scale: 2
      t.decimal :shipping, precision: 10, scale: 2
      t.decimal :tax, precision: 10, scale: 2
      t.integer :qty
      t.references :vendor, foreign_key: true
      t.text :notes
      t.datetime :purchased_at
      t.datetime :received_at

      t.timestamps
    end
  end
end
