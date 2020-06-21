require 'rails_helper'

RSpec.describe Ownership, type: :model do
  it { is_expected.to have_db_column(:ownable_id).of_type(:integer) }  
  it { is_expected.to have_db_column(:ownable_type).of_type(:string) }

  it { is_expected.to belong_to(:ownable) }
end
