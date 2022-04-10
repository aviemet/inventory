class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :name, null: false
      t.string :slug, null: false, index: { unique: true}

      t.timestamps
    end
  end
end
