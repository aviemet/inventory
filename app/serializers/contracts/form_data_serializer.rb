class Contracts::FormDataSerializer < ContractSerializer
  belongs_to :vendor, serializer: Vendors::OptionsSerializer, optional: true
end
