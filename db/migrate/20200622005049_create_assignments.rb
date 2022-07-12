class CreateAssignments < ActiveRecord::Migration[6.0]
  def change
    create_table :assignments do |t|
      t.references :assignable, polymorphic: true, null: false
      t.references :assign_toable, polymorphic: true, null: false
      t.references :location, null: false, foreign_key: true
      t.integer :qty, default: 1
      t.datetime :assigned_at
      t.datetime :returned_at
      t.datetime :expected_at
      t.text :notes
      t.boolean :active, null: false, default: true
      t.references :created_by, null: true, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
