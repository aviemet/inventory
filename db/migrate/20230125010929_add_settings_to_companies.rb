class AddSettingsToCompanies < ActiveRecord::Migration[7.0]
  def change
    change_table :companies, bulk: true do |t|
      t.string :default_currency, null: false
      t.jsonb :settings, default: {}
      t.references :tickets_smtp, null: true, foreign_key: { to_table: :smtps }
      t.references :app_smtp, null: true, foreign_key: { to_table: :smtps }

      t.indecx :settings, using: :gin
    end
  end
end
