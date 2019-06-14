class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.text :name
      t.references :contact, foreign_key: true
      t.references :company, foreign_key: true

      t.timestamps
    end
  end
end
