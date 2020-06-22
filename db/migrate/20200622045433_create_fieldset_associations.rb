class CreateFieldsetAssociations < ActiveRecord::Migration[6.0]
  def change
    create_table :fieldset_associations do |t|
      t.references :fieldset, null: false, foreign_key: true
      t.references :fieldable, polymorphic: true, null: false

      t.timestamps
    end
  end
end
