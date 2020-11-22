class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :number, index: { unique: true }
      t.references :user, null: false, foreign_key: true
      t.datetime :ordered_at
      t.datetime :delivered_at
      t.datetime :canceled_at
      t.datetime :returned_at
      t.decimal :shipping, precision: 10, scale: 2
      t.decimal :tax, precision: 10, scale: 2
      t.decimal :discount, precision: 10, scale: 2
      t.references :vendor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
