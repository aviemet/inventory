class CreateNics < ActiveRecord::Migration[6.0]
  create_table :nics do |t|
    t.macaddr :mac
    t.integer :nic_type, null: false, required: true
    t.references :item, null: false, foreign_key: true

    t.timestamps
  end
end
