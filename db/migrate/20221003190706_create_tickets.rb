class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.string :subject, required: true
      t.text :description
      t.references :assigned_to, polymorphic: true, null: true
      t.references :created_by, null: true, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
