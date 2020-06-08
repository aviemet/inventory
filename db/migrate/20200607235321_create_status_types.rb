class CreateStatusTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :status_types do |t|
      t.string :name, index: { unique: true }

      t.timestamps
    end
  end
end
