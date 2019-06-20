class CreateDepartments < ActiveRecord::Migration[5.2]
  def change
    create_table :departments do |t|
      t.text :name
      t.references :company, foreign_key: true

      t.timestamps
    end
  end
end
