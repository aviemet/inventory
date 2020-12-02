class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :slug, null: false, index: { unique: true}
      t.references :parent, null: true, foreign_key: { to_table: :locations }
    end
  end
end
