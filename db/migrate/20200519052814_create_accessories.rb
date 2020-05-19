class CreateAccessories < ActiveRecord::Migration[6.0]
  def change
    create_table :accessories do |t|
      t.string :name
      t.references :item, null: false, foreign_key: true
      t.text :description

      t.timestamps
    end
  end
end
