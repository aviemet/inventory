include Rails.application.routes.url_helpers

class AuditBlueprint < Blueprinter::Base
  identifier :id

  fields :auditable_id,
         :auditable_type,
         :associated_id,
         :associated_type,
         :user_id,
         :user_type,
         :username,
         :action,
         :audited_changes,
         :version,
         :comment,
         :remote_address,
         :request_uuid,
         :created_at

  view :dashboard do
    field :route do |audit|
      begin
        polymorphic_path(audit.auditable_type.constantize.find(audit.auditable_id), only_path: true)
      rescue
        nil
      end
    end

    association :user, blueprint: UserBlueprint
  
    association :person, blueprint: PersonBlueprint do |audit|
      audit.user&.person
    end
  end

end
