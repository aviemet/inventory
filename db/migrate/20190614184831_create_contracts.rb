class CreateContracts < ActiveRecord::Migration[5.2]
  def change
    create_table :contracts do |t|
      t.references :contract_type, foreign_key: true
      t.references :vendor, foreign_key: true
      t.text :system
      t.text :description
      t.text :notes

      t.timestamps
    end
  end
end
