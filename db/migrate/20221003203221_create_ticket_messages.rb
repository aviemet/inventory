class CreateTicketMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :ticket_messages do |t|
      t.text :body, null: false
      t.references :ticket, null: false, foreign_key: true
      t.references :parent, null: true, foreign_key: { to_table: :ticket_messages }
      t.references :created_by, null: true, foreign_key: { to_table: :people }

      t.timestamps
    end
  end
end
