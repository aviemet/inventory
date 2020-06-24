module ContactableConcern
  extend ActiveSupport::Concern

  def contact_attributes 
    { 
      contact_attributes: Contact.attribute_names.map(&:to_sym)
        .push(addresses: Address.attribute_names.map(&:to_sym))
        .push(addresses: Email.attribute_names.map(&:to_sym))
        .push(addresses: Phone.attribute_names.map(&:to_sym))
        .push(addresses: Website.attribute_names.map(&:to_sym))
    }
  end
end
