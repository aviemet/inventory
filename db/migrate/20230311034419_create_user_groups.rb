class CreateUserGroups < ActiveRecord::Migration[7.0]
  def change
    create_table :user_groups do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
