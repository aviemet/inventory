class CreateCustomFields < ActiveRecord::Migration[6.0]
  def change
    create_table :custom_fields do |t|
      t.string :name
      t.string :format
      t.string :element
      t.string :description
      t.text :notes

      t.timestamps
    end
  end
end
