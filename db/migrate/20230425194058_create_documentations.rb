class CreateDocumentations < ActiveRecord::Migration[7.0]
  def change
    create_table :documentations do |t|
      t.string :slug
      t.string :title
      t.text :body
      t.references :category, null: false, foreign_key: true
      t.references :created_by, null: true, foreign_key: { to_table: :people }

      t.timestamps
    end
  end
end
