class CreateTicketStatuses < ActiveRecord::Migration[7.0]
  def change
    create_table :ticket_statuses do |t|
      t.string :name, null: false
      t.integer :status_type, default: 0
      t.string :slug, null: false, index: { unique: true }

      t.timestamps
    end
  end
end
