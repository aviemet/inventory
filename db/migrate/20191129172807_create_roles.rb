class CreateRoles < ActiveRecord::Migration[6.0]
  def change
    create_table :roles do |t|
      t.text :name
      t.integer :level

      t.timestamps
    end
    add_index :roles, :name, unique: true
  end
end
