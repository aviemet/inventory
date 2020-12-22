class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :number, index: { unique: true }
      t.references :user, null: false, foreign_key: true
      t.datetime :ordered_at
      t.datetime :delivered_at
      t.datetime :canceled_at
      t.datetime :returned_at
      t.monetize :shipping, amount: { null: true, default: nil }
      t.monetize :tax, amount: { null: true, default: nil }
      t.monetize :discount, amount: { null: true, default: nil }
      t.references :vendor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
