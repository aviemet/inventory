class CreateIpLeases < ActiveRecord::Migration[6.0]
  def change
    create_table :ip_leases do |t|
      t.references :nic, null: false, foreign_key: true
      t.inet :address
      t.boolean :active, null: false, default: true

      t.timestamps
    end
  end
end
