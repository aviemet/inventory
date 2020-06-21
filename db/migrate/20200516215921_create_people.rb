class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.boolean :active
      t.string :employee_number
      t.string :title
      t.references :department, null: true, foreign_key: true
      t.references :manager, null: true, foreign_key: { to_table: :people }

      t.timestamps
    end
  end
end
