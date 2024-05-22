class Components::FormDataSerializer < ComponentSerializer
  belongs_to :model, serializer: Models::OptionsSerializer
  belongs_to :vendor, serializer: Vendors::OptionsSerializer
end
