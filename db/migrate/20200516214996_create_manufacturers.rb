class CreateManufacturers < ActiveRecord::Migration[6.0]
  def change
    create_table :manufacturers do |t|
      t.string :name, null: false, index: { unique: true }
      t.string :slug, null: false, index: { unique: true }

      t.timestamps
    end
  end
end
