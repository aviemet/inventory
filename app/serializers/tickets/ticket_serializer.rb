class TicketSerializer < ApplicationSerializer
  attributes :subject,
             :description,
             :primary_contact_id,
             :asset_id,
             :created_at,
             :updated_at

  # view :associations do
  #   association :messages, serializer: TicketMessageSerializer
  #   association :created_by, serializer: PersonSerializer
  #   association :primary_contact, serializer: PersonSerializer
  #   association :asset, serializer: AssetSerializer
  #   association :assignees, serializer: PersonSerializer
  #   association :status, serializer: TicketStatusSerializer
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
