class AddManagerToDepartments < ActiveRecord::Migration[6.0]
  def change
    add_reference :departments, :manager, null: true, foreign_key: { to_table: :people }
  end
end
