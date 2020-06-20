class CreatePhoneTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :phone_types do |t|
      t.text :name

      t.timestamps
    end
  end
end
