class CreateSmtps < ActiveRecord::Migration[7.0]
  def change
    create_table :smtps do |t|
      t.string :name                 # Human readable identifier
      t.string :domain               # SMTP host address
      t.integer :port                # SMTP port
      t.integer :security, default: 0  # enum: '', 'tls' or 'ssl'
      t.string :auth                 # I don't know
      t.string :username             # Email account username
      t.string :password             # Email account password
      t.string :address              # Sender address for reply-to header
      t.text :notes                  # Any extra notes

      t.timestamps
    end
  end
end
