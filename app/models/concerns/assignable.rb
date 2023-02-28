# Include on a model which can be assigned (checked out) to another model
module Assignable
  extend ActiveSupport::Concern

  included do
    has_many :assignments, as: :assignable

    def assign_to(assign_toable, params = {})
      assignment = Assignment.new(params)
      assignment.assignable = self
      assignment.assign_toable = assign_toable
      assignment.location_id ||= assign_toable_location_id(assign_toable)

      self.transaction do
        asset_class = self.class.name.downcase

        self._before_assignment(assignment, params) if self.respond_to?(:_before_assignment)
        self.before_assignment(assignment, params) if self.respond_to?(:before_assignment)

        self.assignments << assignment
        self.save

        self.update({ name: params&.[](asset_class)&.[](:name) }) if params&.[](asset_class)&.[](:name)

        self._after_assignment(assignment, params) if self.respond_to?(:_after_assignment)
        self.after_assignment(assignment, params) if self.respond_to?(:after_assignment)
      end

      assignment
    end

    def history
      PublicActivity::Activity
        .where("parameters @> ?", {
          assign_toable_type: self.class.name,
          assign_toable_id: self.id,
        }.to_json)
        .or(PublicActivity::Activity.where({ recipient_type: self.class.name, recipient_id: self.id }))
        .order(created_at: :desc)
    end

    def assign_toable_location_id(asset)
      if asset.respond_to? :location
        asset.location.id
      elsif asset.respond_to? :default_location
        asset.default_location.id
      end
    end

  end
end
