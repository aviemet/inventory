class CreateNetworks < ActiveRecord::Migration[6.0]
  def change
    create_table :networks do |t|
      t.string :name
      t.cidr :ipv4
      t.inet :v4_gateway
      t.inet :v4_dhcp_start
      t.inet :v4_dhcp_end
      t.integer :vland_id

      t.timestamps
    end
  end
end
