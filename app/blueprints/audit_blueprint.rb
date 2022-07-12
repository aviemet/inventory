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

  view :with_user do
    association :user, blueprint: UserBlueprint
  
    association :person, blueprint: PersonBlueprint do |audit|
      audit.user&.person
    end
  end

end
