# Include on a model which can be assigned (checked out) to another model
module Assignable
  extend ActiveSupport::Concern

  included do
    has_many :assignments, as: :assignable

    def assign_to(assign_toable, params = {})
      assignment = Assignment.new({
        assignable: self,
        assign_toable: assign_toable,
        assigned_at: params&.[](:assigned_at) || Time.current,
        expected_at: params&.[](:expected_at),
        created_by: params&.[](:created_by),
        status: params&.[](:status),
        qty: params&.[](:qty),
        notes: params&.[](:notes),
        active: params&.[](:active),
      })

      self.transaction do
        asset_class = self.class.name.downcase
        self._before_assignment(assignment, params) if self.respond_to?(:_before_assignment)
        self.before_assignment(assignment, params) if self.respond_to?(:before_assignment)
        assignment.save
        self.update({ name: params&.[](asset_class)&.[](:name) }) if params&.[](asset_class)&.[](:name)
        self._after_assignment(assignment, params) if self.respond_to?(:_after_assignment)
        self.after_assignment(assignment, params) if self.respond_to?(:after_assignment)
      end

      assignment
    end

    def history
      Audited::Audit.where({ auditable_type: "Assignment" })
        .where("audited_changes -> 'assignable_id' = ?", self.id.to_s)
        .or(
          Audited::Audit.where({ auditable_type: "Item", auditable_id: self.id })
        )
    end
  end
end
