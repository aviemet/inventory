# ['enum_typs', 'input_object_types', 'interface_types', 'object_types', 'scalar_types', 'union_types'].each do |dir|
#   Dir[File.dirname(__FILE__) + "/#{dir}/*.rb"].each {|file| require file }
# end

module Types
  class MutationType < Types::BaseObject

    field :create_user, mutation: Mutations::CreateUser
  end
end
