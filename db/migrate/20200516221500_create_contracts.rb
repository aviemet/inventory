class CreateContracts < ActiveRecord::Migration[6.0]
  def change
    create_table :contracts do |t|
      t.references :contract_type, null: false, foreign_key: true
      t.references :vendor, null: false, foreign_key: true
      t.string :system
      t.text :description
      t.text :notes

      t.timestamps
    end
  end
end
