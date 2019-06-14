class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.text :address
      t.text :address_2
      t.text :city
      t.text :state
      t.text :zip
      t.reference :contact_type

      t.timestamps
    end
  end
end
