class AddActiveCompanyToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :active_company, :integer
  end
end
