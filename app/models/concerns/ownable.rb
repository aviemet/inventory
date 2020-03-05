module Ownable
	extend ActiveSupport::Concern

	included do
		has_one :owner, as: :ownable, class_name: "Ownership"
		has_one :company, :through => :owner
	end
end
