class CreateStatusLabels < ActiveRecord::Migration[6.0]
  def change
    create_table :status_labels do |t|
      t.string :name
      t.integer :status_type, default: 0
      t.string :slug, null: false, index: { unique: true }
      t.text :description

      t.timestamps
    end
  end
end
