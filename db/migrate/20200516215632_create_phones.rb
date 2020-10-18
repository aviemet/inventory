class CreatePhones < ActiveRecord::Migration[6.0]
  def change
    create_table :phones do |t|
      t.string :number, null: false
      t.string :extension
      t.text :notes
      t.references :contact, null: false, foreign_key: true
      t.references :phone_type

      t.timestamps
    end
  end
end
