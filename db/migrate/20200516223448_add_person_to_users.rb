class AddPersonToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :person, null: false, foreign_key: true
    add_reference :users, :active_company, foreign_key: { to_table: :companies }
    add_column :users, :active, :boolean, default: true
  end
end
