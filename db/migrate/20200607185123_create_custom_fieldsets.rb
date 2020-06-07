class CreateCustomFieldsets < ActiveRecord::Migration[6.0]
  def change
    create_table :custom_fieldsets do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
