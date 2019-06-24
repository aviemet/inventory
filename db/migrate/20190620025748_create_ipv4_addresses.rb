class CreateIpv4Addresses < ActiveRecord::Migration[5.2]
  def change
    create_table :ipv4_addresses do |t|
      t.text :address, null: false

      t.timestamps
    end
  end
end
