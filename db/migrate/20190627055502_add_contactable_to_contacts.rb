class AddContactableToContacts < ActiveRecord::Migration[5.2]
  def change
    add_reference :contacts, :contactable, polymorphic: true, index: true
  end
end
