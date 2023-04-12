require 'rails_helper'

RSpec.describe CompanyPolicy, type: :policy do
  subject { CompanyPolicy.new(user, company) }

  let(:company) { create(:company) }

  permissions ".scope" do
    let(:user) { create(:user, company: company) }

    it "should allow an admin to see the company" do
      company_two = create(:company)
      scope = CompanyPolicy::Scope.new(user, Company)

      expect(scope.resolve.size).to eq(1)
    end
  end

  # permissions :show? do
  #   pending "add some examples to (or delete) #{__FILE__}"
  # end

  # permissions :create? do
  #   pending "add some examples to (or delete) #{__FILE__}"
  # end

  # permissions :update? do
  #   pending "add some examples to (or delete) #{__FILE__}"
  # end

  # permissions :destroy? do
  #   pending "add some examples to (or delete) #{__FILE__}"
  # end
end
