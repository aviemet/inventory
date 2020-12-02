class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.boolean :active, default: true
      t.string :employee_number
      t.string :job_title
      t.references :manager, null: true, foreign_key: { to_table: :people }

      t.timestamps
    end
  end
end
