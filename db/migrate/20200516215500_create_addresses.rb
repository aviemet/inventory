class CreateAddresses < ActiveRecord::Migration[6.0]
  def change
    create_table :addresses do |t|
      t.string :address, null: false
      t.string :address_2
      t.string :city
      t.string :state
      t.string :zip
      t.text :notes
      t.references :contact, null: false, foreign_key: true

      t.timestamps
    end
  end
end
