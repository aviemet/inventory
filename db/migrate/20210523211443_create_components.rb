class CreateComponents < ActiveRecord::Migration[6.1]
  def change
    create_table :components do |t|
      t.string :name
      t.string :model_number
      t.integer :min_qty
      t.integer :qty
      t.monetize :cost, amount: { null: true, default: nil }
      t.datetime :purchased_at
      t.text :notes
      t.references :category, null: false, foreign_key: true
      t.references :manufacturer, null: false, foreign_key: true
      t.references :vendor, null: false, foreign_key: true
      t.references :default_location, null: false, foreign_key: { to_table: :locations }

      t.timestamps
    end
  end
end
