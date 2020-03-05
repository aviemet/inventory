class CreateInterfacesIpv6s < ActiveRecord::Migration[5.2]
  def change
    create_table :interfaces_ipv6s do |t|
      t.references :interface, null: false, foreign_key: true
      t.references :ipv6_address, null: false, foreign_key: true
      t.boolean :active

      t.timestamps
    end
  end
end
