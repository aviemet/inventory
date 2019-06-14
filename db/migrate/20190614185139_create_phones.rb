class CreatePhones < ActiveRecord::Migration[5.2]
  def change
    create_table :phones do |t|
      t.integer :number
      t.integer :extension
      t.text :notes
      t.references :contact_type, foreign_key: true
      t.references :contact, foreign_key: true

      t.timestamps
    end
  end
end
