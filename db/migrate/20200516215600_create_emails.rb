class CreateEmails < ActiveRecord::Migration[6.0]
  def change
    create_table :emails do |t|
      t.string :email, null: false, index: { unique: true }
      t.text :notes
      t.references :contact, null: false, foreign_key: true
      t.references :category, null: true, foreign_key: true

      t.timestamps
    end
  end
end
