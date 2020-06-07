class CreateEmails < ActiveRecord::Migration[6.0]
  def change
    create_table :emails do |t|
      t.string :email, null: false
      t.text :notes
      t.references :contact, null: false, foreign_key: true
      t.references :contact_type

      t.timestamps
    end
  end
end
