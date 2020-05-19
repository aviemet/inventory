class CreatePurchases < ActiveRecord::Migration[6.0]
  def change
    create_table :purchases do |t|
      t.references :item, null: false, foreign_key: true
      t.decimal :price, precision: 10, scale: 2
      t.decimal :shipping, precision: 10, scale: 2
      t.decimal :tax, precision: 10, scale: 2
      t.integer :qty
      t.text :notes

      t.timestamps
    end
  end
end
