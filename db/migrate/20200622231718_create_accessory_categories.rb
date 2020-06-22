class CreateAccessoryCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :accessory_categories do |t|
      t.string :name
      t.string :notes

      t.timestamps
    end
  end
end
