class CreateAssignments < ActiveRecord::Migration[6.0]
  def change
    create_table :assignments do |t|
      t.references :assignable, polymorphic: true, null: false
      t.references :assign_toable, polymorphic: true, null: false
      t.integer :qty, default: 1
      t.integer :status, default: 0
      t.datetime :assigned_at
      t.datetime :returned_at
      t.datetime :expected_at
      t.text :notes
      t.boolean :active
      t.references :created_by, null: true, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
