class CreatePersonGroups < ActiveRecord::Migration[7.0]
  def change
    create_table :person_groups do |t|
      t.string :name
      t.string :slug, null: false, index: { unique: true }
      t.text :description

      t.timestamps
    end
  end
end
