require 'rails_helper'

RSpec.describe Ownership, type: :model do
  it { is_expected.to belong_to(:ownable) }
end
