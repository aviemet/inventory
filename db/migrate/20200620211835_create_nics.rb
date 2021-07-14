class CreateNics < ActiveRecord::Migration[6.0]
  def up
    execute <<-DDL
      CREATE TYPE nic_type AS ENUM (
        'ethernet', 'wifi', 'fiber'
      );
    DDL

    create_table :nics do |t|
      t.macaddr :mac
      t.column :nic_type, :nic_type, required: true
      t.references :item, null: false, foreign_key: true

      t.timestamps
    end
  end

  def down
    drop_column :nic_type, :nic_type
    execute "DROP type nic_type"
  end
end
