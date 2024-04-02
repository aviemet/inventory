class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.string :subject, null: false
      t.serial :number, null: false, index: { unique: true }
      t.text :description
      t.integer :priority
      t.references :status, foreign_key: { to_table: :ticket_statuses }
      t.references :primary_contact, null: true, foreign_key: { to_table: :people }
      t.references :created_by, null: true, foreign_key: { to_table: :people }
      t.references :asset, null: true, foreign_key: true

      t.timestamps
    end
  end

  def up
    execute <<-SQL.squish
      ALTER SEQUENCE tickets_number_seq  RESTART WITH 1000000
    SQL
  end

end
