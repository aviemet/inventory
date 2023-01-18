class CreateAssets < ActiveRecord::Migration[6.0]
  def change
    create_table :assets do |t|
      t.string :type, null: false

      t.string :name, null: false
      t.string :asset_tag, index: { unique: true }
      t.string :serial, index: { unique: true }
      t.monetize :cost, amount: { null: true, default: nil }
      t.datetime :purchased_at
      t.boolean :requestable, null: false, default: false

      t.integer :min_qty
      t.integer :qty

      t.text :notes
      t.references :model, null: false, foreign_key: true
      t.references :vendor, null: true, foreign_key: true
      t.references :default_location, null: true, foreign_key: { to_table: :locations }
      t.references :status_label, null: true, foreign_key: true

      t.timestamps
    end
  end
end
