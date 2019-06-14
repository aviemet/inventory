class CreateEmails < ActiveRecord::Migration[5.2]
  def change
    create_table :emails do |t|
      t.text :email
      t.text :notes
      t.references :contact_type, foreign_key: true
      t.references :contact, foreign_key: true

      t.timestamps
    end
  end
end
