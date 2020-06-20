class CreateNicsIps < ActiveRecord::Migration[6.0]
  def change
    create_table :nics_ips do |t|
      t.references :nic, null: false, foreign_key: true
      t.references :ip, null: false, foreign_key: true
      t.boolean :active

      t.timestamps
    end
  end
end
