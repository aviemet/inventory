class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :asset_tag, index: { unique: true }
      t.string :serial, index: { unique: true }
      t.monetize :cost, amount: { null: true, default: nil }
      t.datetime :purchased_at
      t.boolean :requestable, default: true
      t.text :notes
      t.references :model, null: false, foreign_key: true
      t.references :vendor, null: true, foreign_key: true
      t.references :default_location, null: true, foreign_key: { to_table: :locations }
      t.references :parent, null: true, foreign_key: { to_table: :items }

      t.timestamps
    end
  end
end
