class CreateItemAssignments < ActiveRecord::Migration[5.2]
  def change
    create_table :item_assignments do |t|
      t.references :item, foreign_key: true
      t.references :person, foreign_key: true
      t.boolean :active

      t.timestamps
    end
  end
end
