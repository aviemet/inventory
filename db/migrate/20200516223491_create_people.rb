class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :first_name, null: false
      t.string :middle_name
      t.string :last_name, null: false
      t.boolean :active, null: false, default: true
      t.string :employee_number
      t.string :job_title
      t.string :guid, index: { unique: true }
      t.references :user, foreign_key: true
      t.references :manager, null: true, foreign_key: { to_table: :people }
      t.references :location, null: true, foreign_key: true

      t.timestamps
    end
  end
end
