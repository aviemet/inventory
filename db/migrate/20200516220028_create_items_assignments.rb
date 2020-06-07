class CreateItemsAssignments < ActiveRecord::Migration[6.0]
  def change
    create_table :items_assignments do |t|
      t.references :item, null: false, foreign_key: true
      t.references :person, null: true, foreign_key: true
      t.references :department, null: true, foreign_key: true
      t.references :location, null: true, foreign_key: true
      t.boolean :active

      t.timestamps
    end
  end
end
