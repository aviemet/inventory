# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  active                 :boolean          default(TRUE)
#  confirmation_sent_at   :datetime
#  confirmation_token     :string
#  confirmed_at           :datetime
#  current_sign_in_at     :datetime
#  current_sign_in_ip     :inet
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  failed_attempts        :integer          default(0), not null
#  invitation_accepted_at :datetime
#  invitation_created_at  :datetime
#  invitation_limit       :integer
#  invitation_sent_at     :datetime
#  invitation_token       :string
#  invitations_count      :integer          default(0)
#  invited_by_type        :string
#  last_sign_in_at        :datetime
#  last_sign_in_ip        :inet
#  locked_at              :datetime
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  sign_in_count          :integer          default(0), not null
#  table_preferences      :jsonb
#  unconfirmed_email      :string
#  unlock_token           :string
#  user_preferences       :jsonb
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  active_company_id      :bigint
#  invited_by_id          :bigint
#
# Indexes
#
#  index_users_on_active_company_id     (active_company_id)
#  index_users_on_confirmation_token    (confirmation_token) UNIQUE
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_invitation_token      (invitation_token) UNIQUE
#  index_users_on_invited_by            (invited_by_type,invited_by_id)
#  index_users_on_invited_by_id         (invited_by_id)
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_table_preferences     (table_preferences) USING gin
#  index_users_on_unlock_token          (unlock_token) UNIQUE
#  index_users_on_user_preferences      (user_preferences) USING gin
#
# Foreign Keys
#
#  fk_rails_...  (active_company_id => companies.id)
#
require 'rails_helper'
require "models/concerns/serializable"

RSpec.describe User do
  subject(:user) { build_stubbed(:user) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(user).to be_valid
    end

    it { is_expected.to validate_presence_of(:email) }
    # it { is_expected.to validate_presence_of(:password) }

    it { is_expected.to allow_value("1StrongPassword!").for(:password) }
    # Require uppercase letter
    it { is_expected.not_to allow_value("1weakpassword!").for(:password) }
    # Require number
    it { is_expected.not_to allow_value("Weakpassword!").for(:password) }
    # Require symbol
    it { is_expected.not_to allow_value("Weakpassword1").for(:password) }
    # Require 8 character minimum length
    it { is_expected.not_to allow_value("a1P.").for(:password) }
  end

  describe "Associations" do
    it { is_expected.to belong_to(:active_company).optional }
    it { is_expected.to have_many(:people) }
    it { is_expected.to have_many(:companies) }
    it { is_expected.to have_one(:person) }

    it "returns the person record associated with the active company" do
      user = build(:user)
      user.people << build(:person)
      expect(user.person).to eq(user.company.people.first)
    end
  end

  describe "Serializer" do
    it_behaves_like "serializable"
  end
end
