class Permisssion < ApplicationRecord
  belongs_to :permissible, polymorphic: true
  belongs_to :user
  belongs_to :role
end
