class Contracts::IndexSerializer < ApplicationSerializer
  object_as :contract

  attributes(
     :name,
     :number,
     :notes,
     :begins_at,
     :ends_at,
     :vendor_id,
     :category_id,
     :created_at,
     :updated_at,
   )

  belongs_to :department, serializer: DepartmentSerializer
  belongs_to :category, serializer: CategorySerializer
  belongs_to :vendor, serializer: VendorSerializer
end
