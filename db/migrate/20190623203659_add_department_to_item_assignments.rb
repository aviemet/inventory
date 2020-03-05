class AddDepartmentToItemAssignments < ActiveRecord::Migration[5.2]
  def change
    add_reference :item_assignments, :department, foreign_key: true
  end
end
