class Person::AsCreate < Person
  after_initialize :create_user
  after_initialize :create_contact

  def self.blueprint
    PersonBlueprint
  end

  def blueprint
    PersonBlueprint
  end

  private

  def create_user
    self.user = User.new
  end

  def create_contact
    self.contact = Contact.new
    self.contact.emails << Email.new
  end

end
