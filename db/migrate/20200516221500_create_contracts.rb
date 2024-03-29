class CreateContracts < ActiveRecord::Migration[6.0]
  def change
    create_table :contracts do |t|
      t.string :name, null: false
      t.string :slug, null: false, index: { unique: true }
      t.string :number
      t.text :notes
      t.datetime :begins_at
      t.datetime :ends_at
      t.references :vendor, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
