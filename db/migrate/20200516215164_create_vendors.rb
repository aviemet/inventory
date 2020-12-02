class CreateVendors < ActiveRecord::Migration[6.0]
  def change
    create_table :vendors do |t|
      t.string :name
      t.string :slug, null: false, index: { unique: true}
      t.string :url

      t.timestamps
    end
  end
end
