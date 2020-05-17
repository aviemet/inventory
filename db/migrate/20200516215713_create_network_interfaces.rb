class CreateNetworkInterfaces < ActiveRecord::Migration[6.0]
  def change
    create_table :network_interfaces do |t|
      t.macaddr :mac
      t.references :asset, null: false, foreign_key: true

      t.timestamps
    end
  end
end
