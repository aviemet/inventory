class CreateInterfacesIpv4s < ActiveRecord::Migration[5.2]
  def change
    create_table :interfaces_ipv4s do |t|
      t.references :interface, foreign_key: true
      t.references :ipv4_address, foreign_key: true
      t.boolean :active

      t.timestamps
    end
  end
end
