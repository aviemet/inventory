class User::AsRegister < User

  before_create :ensure_person_association
  after_create :add_email_to_contact

  private

  def ensure_person_association
    self.person ||= Person.create!
  end

  # Before create, add the new user's email to their contact card
  def add_email_to_contact
    if !self.person.contact.emails.exists?(:email => self.email)
      self.person.contact.emails << Email.create(email: self.email)
    end
	end
	
end