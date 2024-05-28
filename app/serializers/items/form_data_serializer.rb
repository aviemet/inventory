class Items::FormDataSerializer < ItemSerializer
  type :number
  def department_id
    item.department&.id
  end

  has_one :department, serializer: Departments::OptionsSerializer, optional: true

  belongs_to :model, serializer: Models::OptionsSerializer, optional: true
  belongs_to :vendor, serializer: Vendors::OptionsSerializer, optional: true
  belongs_to :default_location, serializer: Locations::OptionsSerializer, optional: true
  belongs_to :status_label, serializer: StatusLabels::OptionsSerializer, optional: true
end
