class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.text :first_name
      t.text :last_name
      t.boolean :active
      t.references :department, foreign_key: true
      t.references :contact, foreign_key: true

      t.timestamps
    end
  end
end
