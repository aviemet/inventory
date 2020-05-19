class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :number
      t.references :user, null: false, foreign_key: true
      t.date :ordered_on
      t.date :delivered_on
      t.date :canceled_on
      t.date :returned_on
      t.decimal :shipping, precision: 10, scale: 2
      t.references :vendor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
