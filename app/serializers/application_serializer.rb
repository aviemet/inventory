class ApplicationSerializer < Oj::Serializer
  include TypesFromSerializers::DSL

  identifier

  def currency_for(obj)
    obj&.cost&.amount&.to_f unless obj.cost.nil?
  end
end
