class CreatePurchases < ActiveRecord::Migration[6.0]
  def change
    create_table :purchases do |t|
      t.references :purchasable, polymorphic: true, null: false
      t.decimal :cost, precision: 10, scale: 2
      t.integer :qty
      t.text :notes

      t.timestamps
    end
  end
end
