require 'rails_helper'
require_relative '../support/devise'

RSpec.describe LocationPolicy, type: :policy do
  subject { described_class }

  let(:accessory) { Accessory.new }

  context "when the user is a super_admin" do
    login_admin

    permissions ".scope" do
      it "allows everything" do
        expect(described_class.new(@admin, accessory)).to permit_all_actions
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
end
