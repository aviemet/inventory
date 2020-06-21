require 'rails_helper'

RSpec.describe Contact, type: :model do
  it { is_expected.to have_db_column(:contactable_id).of_type(:integer) }  
  it { is_expected.to have_db_column(:contactable_type).of_type(:string) }

  it { is_expected.to belong_to(:contactable) }
end
