class Contracts::FormDataSerializer < ApplicationSerializer
  object_as :contract

  attributes(
     :name,
     :number,
     :notes,
     :begins_at,
     :ends_at,
     :vendor_id,
     :category_id,
   )

end
