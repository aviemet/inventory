class CreateAssignments < ActiveRecord::Migration[6.0]
  def change
    create_table :assignments do |t|
      t.references :assignable, polymorphic: true, null: false
      t.references :item, null: false, foreign_key: true
      t.boolean :active

      t.timestamps
    end
  end
end
