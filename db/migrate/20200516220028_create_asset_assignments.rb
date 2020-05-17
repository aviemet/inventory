class CreateAssetAssignments < ActiveRecord::Migration[6.0]
  def change
    create_table :asset_assignments do |t|
      t.references :asset, null: false, foreign_key: true
      t.references :person, null: false, foreign_key: true
      t.references :department, null: false, foreign_key: true
      t.boolean :active

      t.timestamps
    end
  end
end
