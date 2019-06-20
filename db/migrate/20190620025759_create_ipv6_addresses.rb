class CreateIpv6Addresses < ActiveRecord::Migration[5.2]
  def change
    create_table :ipv6_addresses do |t|
      t.text :address

      t.timestamps
    end
  end
end
