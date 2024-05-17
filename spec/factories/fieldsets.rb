# == Schema Information
#
# Table name: fieldsets
#
#  id          :bigint           not null, primary key
#  description :text
#  name        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
FactoryBot.define do
  factory :fieldset do
    name { "MyString" }
    description { "MyText" }
  end
end
