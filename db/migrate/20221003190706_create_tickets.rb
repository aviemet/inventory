class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.string :subject, null: false
      t.integer :number, null: false
      t.text :description
      t.integer :priority
      t.references :status, foreign_key: { to_table: :ticket_statuses }
      t.references :primary_contact, null: true, foreign_key: { to_table: :people }
      t.references :created_by, null: true, foreign_key: { to_table: :people }
      t.references :asset, null: true, foreign_key: true

      t.timestamps
    end

    add_index(:tickets, :number)
  end
end
