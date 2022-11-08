class AddStatusToAssignable < ActiveRecord::Migration[7.0]
  def change
    [:assets, :licenses].each do |model|
      add_reference model, :status_type, foreign_key: true
    end
  end
end
