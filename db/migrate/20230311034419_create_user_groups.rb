class CreateUserGroups < ActiveRecord::Migration[7.0]
  def change
    create_table :user_groups do |t|
      t.string :name
      t.string :slug, null: false, index: { unique: true }
      t.text :description

      t.timestamps
    end
  end
end
