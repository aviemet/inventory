module Assignable
  extend ActiveSupport::Concern

  included do
    has_many :assignments, as: :assignable

    def assign_to(assign_toable)
      Assignment.create({ assignable: self, assign_toable: assign_toable })
    end

    def assignment
      assignments.where(active: true).first
    end

    def assigned_to
      assignment.assign_toable
    end

  end
end
