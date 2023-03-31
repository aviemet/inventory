class RolifyCreateRoles < ActiveRecord::Migration[7.0]
  def change
    create_table(:roles) do |t|
      t.string :name
      t.references :resource, :polymorphic => true

      t.timestamps
    end

    ["user", "person", "person_group"].each do |model|
      create_table("#{model.pluralize}_roles", :id => false) do |t|
        t.references model
        t.references :role
      end

      add_index("#{model.pluralize}_roles", ["#{model}_id", :role_id])
    end

    add_index(:roles, [:name, :resource_type, :resource_id])
  end
end
