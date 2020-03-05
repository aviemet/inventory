class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.text :name, null: false
      t.references :contact, foreign_key: true
      t.references :company, null: false, foreign_key: true

      t.timestamps
    end
  end
end
