class CreateAssignments < ActiveRecord::Migration[6.0]
  def change
    create_table :assignments do |t|
      t.references :assignable, polymorphic: true, null: false
      t.references :assign_toable, polymorphic: true, null: false
      t.time :assigned_at
      t.time :returned_at
      t.time :expected_at
      t.text :notes
      t.boolean :active

      t.timestamps
    end
  end
end
