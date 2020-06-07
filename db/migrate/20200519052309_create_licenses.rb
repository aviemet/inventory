class CreateLicenses < ActiveRecord::Migration[6.0]
  def change
    create_table :licenses do |t|
      t.string :title
      t.string :description
      t.integer :seats
      t.text :key
      t.references :model, null: true, foreign_key: true

      t.timestamps
    end
  end
end
