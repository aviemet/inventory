class AddOtherColumnsToUsers < ActiveRecord::Migration[6.0]
  def change
    change_table :users, bulk: true do |t|
      t.boolean :active, default: true, null: false

      t.jsonb :table_preferences, default: {}
      t.jsonb :user_preferences, default: {}

      t.index :table_preferences, using: :gin
      t.index :user_preferences, using: :gin

      t.references :active_company, foreign_key: { to_table: :companies }
    end
  end
end
