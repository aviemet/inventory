class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.text :address
      t.text :address_2
      t.text :city
      t.text :state
      t.text :zip
      t.text :notes
      t.references :contact_type, foreign_key: true
      t.references :contact, foreign_key: true

      t.timestamps
    end
  end
end
