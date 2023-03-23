class CreateLdaps < ActiveRecord::Migration[7.0]
  def change
    create_table :ldaps do |t|
      t.string :name
      t.string :host
      t.string :port
      t.string :domain
      t.string :username
      t.string :password
      t.string :tree_base
      t.string :user_search
      t.string :sync_interval
      t.references :company, null: false, foreign_key: true

      t.timestamps
    end
  end
end
