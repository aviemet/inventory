class CreateVendors < ActiveRecord::Migration[5.2]
  def change
    create_table :vendors do |t|
      t.text :name
      t.text :url
      t.references :contact, foreign_key: true

      t.timestamps
    end
  end
end
