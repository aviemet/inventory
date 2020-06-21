class CreateNics < ActiveRecord::Migration[6.0]
  def change
    create_table :nics do |t|
      t.macaddr :mac
      t.references :item, null: false, foreign_key: true

      t.timestamps
    end
  end
end