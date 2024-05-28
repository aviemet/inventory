# == Schema Information
#
# Table name: fields
#
#  id          :bigint           not null, primary key
#  description :string
#  element     :string
#  format      :string
#  name        :string
#  notes       :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
FactoryBot.define do
  factory :field do
    name { "MyString" }
    format { "MyString" }
    element { "MyString" }
    description { "MyString" }
    notes { "MyText" }
  end
end
