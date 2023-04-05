class Contracts::IndexSerializer < ApplicationSerializer
  object_as :contract

  attributes :name,
             :number,
             :notes,
             :begins_at,
             :ends_at,
             :vendor_id,
             :category_id,
             :created_at,
             :updated_at

  association :department, serializer: DepartmentSerializer
  association :category, serializer: CategorySerializer
  association :vendor, serializer: VendorSerializer
end
