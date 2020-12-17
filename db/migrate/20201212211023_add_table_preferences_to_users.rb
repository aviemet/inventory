class AddTablePreferencesToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :table_preferences, :jsonb, default: {}
    add_index :users, :table_preferences, using: :gin
  end
end
