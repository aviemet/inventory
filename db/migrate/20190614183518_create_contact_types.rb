class CreateContactTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :contact_types do |t|
      t.text :name, null: false

      t.timestamps
    end
  end
end
