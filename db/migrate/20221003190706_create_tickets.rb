class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.string :subject, null: false
      t.text :description
      t.integer :priority
      t.references :ticket_status
      t.references :primary_contact, null: true, foreign_key: { to_table: :people }
      t.references :created_by, null: true, foreign_key: { to_table: :people }

      t.timestamps
    end
  end
end
