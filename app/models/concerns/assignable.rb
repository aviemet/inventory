# Include on a model which can be assigned (checked out) to another model
module Assignable
  extend ActiveSupport::Concern

  included do
    has_many :assignments, as: :assignable
    belongs_to :status_type

    before_validation :set_defaults

    def assign_to(assign_toable, params = {})
      assignment = Assignment.new(params)
      assignment.assignable = self
      assignment.assign_toable = assign_toable
      assignment.location_id ||= assign_toable&.default_location&.id

      self.transaction do
        asset_class = self.class.name.downcase
        
        self._before_assignment(assignment, params) if self.respond_to?(:_before_assignment)
        self.before_assignment(assignment, params) if self.respond_to?(:before_assignment)

        # assignment.save
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
        .or(PublicActivity::Activity.where({ trackable_type: self.class.name, trackable_id: self.id }))
    end

    def set_defaults
      return unless self.has_attribute? :status_type_id
      
      self.status_type ||= StatusType.find_by_name("Deployable")
    end

  end
end
