class CreateVendors < ActiveRecord::Migration[5.2]
  def change
    create_table :vendors do |t|
      t.text :name, null: false
      t.text :url
      # t.references :contact, null: false, foreign_key: true

      t.timestamps
    end
  end
end
