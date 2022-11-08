class CreateWarranties < ActiveRecord::Migration[6.0]
  def change
    create_table :warranties do |t|
      t.references :asset, null: false, foreign_key: true
      t.integer :length
      t.text :notes

      t.timestamps
    end
  end
end
