class CreateNics < ActiveRecord::Migration[6.0]
  create_table :nics do |t|
    t.macaddr :mac
    t.integer :nic_type, null: false
    t.references :item, null: false, foreign_key: { to_table: :assets }

    t.timestamps
  end
end
