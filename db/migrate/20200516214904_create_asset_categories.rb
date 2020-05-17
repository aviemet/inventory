class CreateAssetCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :asset_categories do |t|
      t.string :name

      t.timestamps
    end
  end
end
