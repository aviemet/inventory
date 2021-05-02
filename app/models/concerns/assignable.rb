# Include on a model which can be assigned (checked out) to another model
module Assignable
  extend ActiveSupport::Concern

  included do
    has_many :assignments, as: :assignable

    # def method_missing(name, *args, &block)
    #   if method_name.to_sym == :assignment && !self&.asset_with_quantity?
    #     self._assignment(*args, &block)
    #   else
    #     super
    #   end
    # end

    # def respond_to_missing?(method_name, _)
    #   method_name.to_sym == :assignment && !self&.asset_with_quantity? || super
    # end

    def assignment
      return if self.assignments.empty?

      self.assignments.select(&:active).first
    end

    def assign_to(assign_toable, assigned_at: Time.current, expected_at: nil, created_by: nil)
      Assignment.create({
        assignable: self,
        assign_toable: assign_toable,
        assigned_at: assigned_at,
        expected_at: expected_at,
        created_by: created_by
      })
    end

    def assigned_to
      self.assignment&.assign_toable
    end

    def assigned?
      !self.assignment.nil?
    end

    def unassign(returned_at: nil, name: nil)
      self.transaction do
        self.update(name: name) if name && self.name != name

        self.assignment&.update({
          active: false,
          returned_at: returned_at || Time.current
        })
      end
    end
  end
end
