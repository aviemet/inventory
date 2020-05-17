class CreateIpv4Addresses < ActiveRecord::Migration[6.0]
  def change
    create_table :ipv4_addresses do |t|
      t.inet :address, null: false

      t.timestamps
    end
  end
end
