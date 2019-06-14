class CreateNetworks < ActiveRecord::Migration[5.2]
  def change
    create_table :networks do |t|
      t.text :name
      t.text :ipv4
      t.text :v4_mask
      t.text :v4_gateway
      t.text :v4_dhcp_start
      t.text :v4_dhcp_end
      t.integer :vlan_id

      t.timestamps
    end
  end
end
