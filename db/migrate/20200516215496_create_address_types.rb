class CreateAddressTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :address_types do |t|
      t.text :name

      t.timestamps
    end
  end
end
