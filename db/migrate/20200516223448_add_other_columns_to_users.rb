class AddOtherColumnsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :person, null: false, foreign_key: true
    add_reference :users, :active_company, foreign_key: { to_table: :companies }
    add_column    :users, :active, :boolean, default: true
    add_column    :users, :table_preferences, :jsonb, default: {}
    add_index     :users, :table_preferences, using: :gin
    add_column    :users, :user_preferences, :jsonb, default: {}
    add_index     :users, :user_preferences, using: :gin
  end
end
