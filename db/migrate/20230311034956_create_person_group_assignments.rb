class CreatePersonGroupAssignments < ActiveRecord::Migration[7.0]
  def change
    create_table :person_group_assignments do |t|
      t.references :person, null: false, foreign_key: true
      t.references :person_group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
