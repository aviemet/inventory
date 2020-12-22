class CreatePurchases < ActiveRecord::Migration[6.0]
  def change
    create_table :purchases do |t|
      t.references :purchasable, polymorphic: true, null: false
      t.monetize :cost
      t.integer :qty
      t.text :notes

      t.timestamps
    end
  end
end
