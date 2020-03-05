class CreateOwnerships < ActiveRecord::Migration[6.0]
  def change
    create_table :ownerships do |t|
      t.references :company, foreign_key: true
      t.references :ownable, polymorphic: true

      t.timestamps
    end
  end
end
