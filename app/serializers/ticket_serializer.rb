class TicketSerializer < ApplicationSerializer
  object_as :ticket

  attributes :subject,
             :description,
             :primary_contact_id,
             :asset_id,
             :created_at,
             :updated_at

  # view :associations do
    # has_many :messages, serializer: TicketMessageSerializer
    # belongs_to :created_by, serializer: PersonSerializer
    # belongs_to :primary_contact, serializer: PersonSerializer
    # belongs_to :asset, serializer: AssetSerializer
    # has_many :assignees, serializer: PersonSerializer
    # belongs_to :status, serializer: TicketStatusSerializer
  # end

  # view :as_options do
  #   only :id, :subject
  # end

  # view :edit do
  #   include_view :edit

  #   association :assignments, serializer: TicketAssignmentSerializer

  #   exclude :created_by
  # end

  # view :new do
  #   include_view :new

  #   association :assignments, serializer: TicketAssignmentSerializer

  #   # association :status, serializer: TicketStatusSerializer, view: :new

  #   excludes :created_by
  # end
end
