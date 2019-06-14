class CreateInterfaces < ActiveRecord::Migration[5.2]
  def change
    create_table :interfaces do |t|
      t.text :mac
      t.references :item, foreign_key: true

      t.timestamps
    end
  end
end
