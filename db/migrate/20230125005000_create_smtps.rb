class CreateSmtps < ActiveRecord::Migration[7.0]
  def change
    create_table :smtps do |t|
      t.string :name
      t.string :address
      t.integer :port
      t.string :domain
      t.string :auth
      t.boolean :tls
      t.string :username
      t.string :password
      t.text :notes

      t.timestamps
    end
  end
end
