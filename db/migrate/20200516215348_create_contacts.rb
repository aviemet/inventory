class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.text :notes
      t.references :contactable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
