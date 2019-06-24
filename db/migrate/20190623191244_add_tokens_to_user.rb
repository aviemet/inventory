class AddTokensToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :refresh_secret, :string
    add_column :users, :user_secret, :string
  end
end
