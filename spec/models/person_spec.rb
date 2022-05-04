require 'rails_helper'
require 'models/concerns/ownable'
require 'models/concerns/contactable'
require 'models/concerns/assign_toable'
require 'models/concerns/fieldable'

RSpec.describe Person, type: :model do
  subject {
    build(:person)
  }

  describe "Validations" do
    it "is valid with valid attributes" do
      subject.manager = build(:person)
      expect(subject).to be_valid
    end

    it "is valid without a manager" do
      subject.manager = nil
      expect(subject).to be_valid
    end

    it "is valid without a job title" do
      subject.job_title = nil
      expect(subject).to be_valid
    end

    it "is valid without an employee number" do
      subject.employee_number = nil
      expect(subject).to be_valid
    end

    it "is valid without a manager" do
      subject.manager = nil
      expect(subject).to be_valid
    end

    it "is not valid without a first name" do
      subject.first_name = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without a last name" do
      subject.last_name = nil
      expect(subject).to_not be_valid
    end
  end

  describe "Associations" do
    it_behaves_like "ownable"
    it_behaves_like "contactable"
    it_behaves_like "assign_toable"
    it_behaves_like "fieldable"

    it { should belong_to(:manager).class_name('Person').optional }
    it { should have_one(:user) }
  end
end
