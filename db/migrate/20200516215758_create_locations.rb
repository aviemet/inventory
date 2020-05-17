class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :name, null: false
      t.references :contact, null: false, foreign_key: true
      t.references :company, null: false, foreign_key: true
      t.references :parent, null: true, foreign_key: { to_table: :locations }

      t.timestamps
    end
  end
end
