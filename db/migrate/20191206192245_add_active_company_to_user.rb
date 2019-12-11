class AddActiveCompanyToUser < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :active_company, foreign_key: { to_table: :companies }
  end
end
