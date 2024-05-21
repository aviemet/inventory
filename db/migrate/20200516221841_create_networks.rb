class CreateNetworks < ActiveRecord::Migration[6.0]
  def change
    create_table :networks do |t|
      t.string :name, null: false
      t.cidr :address, null: false
      t.inet :gateway
      t.inet :dhcp_start
      t.inet :dhcp_end
      t.integer :vlan_id
      t.text :notes

      t.timestamps
    end
  end
end
