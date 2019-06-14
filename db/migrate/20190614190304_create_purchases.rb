class CreatePurchases < ActiveRecord::Migration[5.2]
  def change
    create_table :purchases do |t|
      t.references :item, foreign_key: true
      t.decimal10 :price
      t.decimal2 :price
      t.decimal10 :shipping
      t.decimal2 :shipping
      t.decimal10 :tax
      t.decimal2 :tax
      t.integer :qty
      t.references :vendor, foreign_key: true
      t.text :notes
      t.datetime :purchased_at
      t.datetime :received_at

      t.timestamps
    end
  end
end
