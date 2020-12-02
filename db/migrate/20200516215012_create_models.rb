class CreateModels < ActiveRecord::Migration[6.0]
  def change
    create_table :models do |t|
      t.string :name
      t.string :slug, null: false, index: { unique: true}
      t.string :model_number
      t.text :notes
      t.references :category, null: false, foreign_key: true
      t.references :manufacturer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
