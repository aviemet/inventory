# ['enum-typs', 'input-object-types', 'interface-types', 'object-types', 'scalar-types', 'union-types'].each do |dir|
#   Dir[File.dirname(__FILE__) + "/#{dir}/*.rb"].each {|file| require file }
# end

module Types
  class MutationType < Types::BaseObject

    field :create_user, mutation: Mutations::CreateUser
  end
end
