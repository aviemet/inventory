class CreateEmails < ActiveRecord::Migration[6.0]
  def change
    create_table :emails do |t|
      t.string :email
      t.text :notes
      t.boolean :primary
      t.references :contact, null: false, foreign_key: true
      t.references :email_type

      t.timestamps
    end
  end
end
