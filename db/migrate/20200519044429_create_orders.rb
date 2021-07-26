class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :number, index: { unique: true }
      t.references :user, null: false, foreign_key: true
      t.text :notes
      t.datetime :submitted_at
      t.datetime :ordered_at
      t.datetime :expected_at
      t.datetime :delivered_at
      t.datetime :canceled_at
      t.datetime :returned_at
      t.string :discount_decription
      t.string :returned_reason
      t.string :canceled_reason
      t.monetize :shipping, amount: { null: true, default: nil }
      t.monetize :tax, amount: { null: true, default: nil }
      t.monetize :discount, amount: { null: true, default: nil }
      t.references :vendor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
