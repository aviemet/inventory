class ContactBlueprint < ApplicationBlueprint
  fields :notes,
         :contactable_type,
         :contactable_id,
         :created_at,
         :updated_at,
         :primary_address_id,
         :primary_phone_id,
         :primary_email_id

  view :associations do
    association :addresses, blueprint: AddressBlueprint
    association :emails, blueprint: EmailBlueprint
    association :phones, blueprint: PhoneBlueprint
    association :websites, blueprint: WebsiteBlueprint
  end

  view :new do
    excludes :notes,
             :contactable_type,
             :contactable_id,
             :created_at,
             :updated_at,
             :primary_address_id,
             :primary_phone_id,
             :primary_email_id

    association :emails, blueprint: EmailBlueprint, view: :new
  end
end
