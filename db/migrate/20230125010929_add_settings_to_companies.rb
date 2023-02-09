class AddSettingsToCompanies < ActiveRecord::Migration[7.0]
  def change
    add_column :companies, :default_currency, :string, null: false

    add_column :companies, :settings, :jsonb, default: {}

    add_reference :companies, :tickets_smtp, null: true, foreign_key: { to_table: :smtps }
    add_reference :companies, :app_smtp, null: true, foreign_key: { to_table: :smtps }

    add_index :companies, :settings, using: :gin
  end
end
