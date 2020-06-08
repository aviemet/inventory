class CreateDepartments < ActiveRecord::Migration[6.0]
  def change
    create_table :departments do |t|
      t.string :name, null: false, index: { unique: true }
      t.references :location, null: true, foreign_key: true

      t.timestamps
    end
  end
end
