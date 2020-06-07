class CreateWebsites < ActiveRecord::Migration[6.0]
  def change
    create_table :websites do |t|
      t.string :url
      t.string :name
      t.string :notes
      t.references :contact, null: false, foreign_key: true
      t.references :contact_type

      t.timestamps
    end
  end
end
