class CreateModels < ActiveRecord::Migration[6.0]
  def change
    create_table :models do |t|
      t.string :name, null: false
      t.string :slug, null: false, index: { unique: true }
      t.string :model_number
      t.text :notes
      t.references :category, null: false, foreign_key: true
      t.references :manufacturer, null: false, foreign_key: true

      t.timestamps
    end

    add_index :models, [:name, :model_number], unique: true
  end
end
