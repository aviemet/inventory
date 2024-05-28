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
class Fieldset < ApplicationRecord
  tracked
  resourcify
end
