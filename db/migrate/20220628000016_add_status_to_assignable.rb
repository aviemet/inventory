class AddStatusToAssignable < ActiveRecord::Migration[7.0]
  def change
    [:assets, :licenses].each do |model|
      add_reference model, :status_label, foreign_key: true
    end
  end
end
