class CreateOwnerships < ActiveRecord::Migration[6.0]
  def change
    create_table :ownerships do |t|
      t.references :company, null: false, foreign_key: true
      t.references :department, null: true, foreign_key: true
      t.references :ownable, polymorphic: true, null: false

      t.timestamps
    end
  end
end
