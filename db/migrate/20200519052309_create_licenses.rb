class CreateLicenses < ActiveRecord::Migration[6.0]
  def change
    create_table :licenses do |t|
      t.string :name, null: false
      t.integer :seats
      t.text :key
      t.string :licenser_name
      t.string :licenser_email
      t.boolean :reassignable, null: false, default: false
      t.monetize :cost, amount: { null: true, default: nil }
      t.datetime :purchased_at
      t.datetime :expires_at
      t.datetime :terminates_at
      t.boolean :maintained, null: false, default: false
      t.text :notes
      t.references :category, null: false, foreign_key: true
      t.references :vendor, null: true, foreign_key: true
      t.references :manufacturer, null: false, foreign_key: true
      t.references :status_label, null: true, foreign_key: true

      t.timestamps
    end
  end
end
