class CreateAssignments < ActiveRecord::Migration[6.0]
  def change
    create_table :assignments do |t|
      t.references :receivable, polymorphic: true, null: false
      t.references :assignable, polymorphic: true, null: false
      t.date :date_assigned
      t.date :date_expected
      t.date :date_returned
      t.text :notes
      t.boolean :active

      t.timestamps
    end
  end
end
