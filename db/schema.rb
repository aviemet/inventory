# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_25_194058) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_trgm"
  enable_extension "plpgsql"

  create_table "activities", id: :serial, force: :cascade do |t|
    t.string "trackable_type"
    t.integer "trackable_id"
    t.string "owner_type"
    t.integer "owner_id"
    t.string "key"
    t.jsonb "parameters", default: {}
    t.string "recipient_type"
    t.integer "recipient_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["owner_id", "owner_type"], name: "index_activities_on_owner_id_and_owner_type"
    t.index ["owner_type", "owner_id"], name: "index_activities_on_owner_type_and_owner_id"
    t.index ["recipient_id", "recipient_type"], name: "index_activities_on_recipient_id_and_recipient_type"
    t.index ["recipient_type", "recipient_id"], name: "index_activities_on_recipient_type_and_recipient_id"
    t.index ["trackable_id", "trackable_type"], name: "index_activities_on_trackable_id_and_trackable_type"
    t.index ["trackable_type", "trackable_id"], name: "index_activities_on_trackable_type_and_trackable_id"
  end

  create_table "addresses", force: :cascade do |t|
    t.string "address", null: false
    t.string "address_2"
    t.string "city"
    t.string "region"
    t.string "country"
    t.string "postal"
    t.text "notes"
    t.bigint "contact_id", null: false
    t.bigint "category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_addresses_on_category_id"
    t.index ["contact_id"], name: "index_addresses_on_contact_id"
  end

  create_table "assets", force: :cascade do |t|
    t.string "type", null: false
    t.string "name", null: false
    t.string "asset_tag"
    t.string "serial"
    t.integer "cost_cents"
    t.string "cost_currency", default: "USD", null: false
    t.datetime "purchased_at", precision: nil
    t.boolean "requestable", default: false, null: false
    t.integer "min_qty"
    t.integer "qty"
    t.text "notes"
    t.bigint "model_id", null: false
    t.bigint "vendor_id"
    t.bigint "default_location_id"
    t.bigint "status_label_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["asset_tag"], name: "index_assets_on_asset_tag", unique: true
    t.index ["default_location_id"], name: "index_assets_on_default_location_id"
    t.index ["model_id"], name: "index_assets_on_model_id"
    t.index ["serial"], name: "index_assets_on_serial", unique: true
    t.index ["status_label_id"], name: "index_assets_on_status_label_id"
    t.index ["vendor_id"], name: "index_assets_on_vendor_id"
  end

  create_table "assignments", force: :cascade do |t|
    t.string "assignable_type", null: false
    t.bigint "assignable_id", null: false
    t.string "assign_toable_type", null: false
    t.bigint "assign_toable_id", null: false
    t.bigint "location_id", null: false
    t.integer "qty", default: 1
    t.datetime "assigned_at", precision: nil
    t.datetime "returned_at", precision: nil
    t.datetime "expected_at", precision: nil
    t.text "notes"
    t.integer "status"
    t.boolean "active", default: true, null: false
    t.bigint "created_by_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assign_toable_type", "assign_toable_id"], name: "index_assignments_on_assign_toable_type_and_assign_toable_id"
    t.index ["assignable_type", "assignable_id"], name: "index_assignments_on_assignable_type_and_assignable_id"
    t.index ["created_by_id"], name: "index_assignments_on_created_by_id"
    t.index ["location_id"], name: "index_assignments_on_location_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "categorizable_type", null: false
    t.string "name"
    t.string "slug", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_categories_on_slug", unique: true
  end

  create_table "companies", force: :cascade do |t|
    t.string "name", null: false
    t.string "slug", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "default_currency", null: false
    t.jsonb "settings", default: {}
    t.bigint "tickets_smtp_id"
    t.bigint "app_smtp_id"
    t.index ["app_smtp_id"], name: "index_companies_on_app_smtp_id"
    t.index ["settings"], name: "index_companies_on_settings", using: :gin
    t.index ["slug"], name: "index_companies_on_slug", unique: true
    t.index ["tickets_smtp_id"], name: "index_companies_on_tickets_smtp_id"
  end

  create_table "contacts", force: :cascade do |t|
    t.text "notes"
    t.string "contactable_type"
    t.bigint "contactable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "primary_address_id"
    t.bigint "primary_phone_id"
    t.bigint "primary_email_id"
    t.index ["contactable_type", "contactable_id"], name: "index_contacts_on_contactable_type_and_contactable_id"
    t.index ["primary_address_id"], name: "index_contacts_on_primary_address_id"
    t.index ["primary_email_id"], name: "index_contacts_on_primary_email_id"
    t.index ["primary_phone_id"], name: "index_contacts_on_primary_phone_id"
  end

  create_table "contracts", force: :cascade do |t|
    t.string "name", null: false
    t.string "slug", null: false
    t.string "number"
    t.text "notes"
    t.datetime "begins_at", precision: nil
    t.datetime "ends_at", precision: nil
    t.bigint "vendor_id", null: false
    t.bigint "category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_contracts_on_category_id"
    t.index ["slug"], name: "index_contracts_on_slug", unique: true
    t.index ["vendor_id"], name: "index_contracts_on_vendor_id"
  end

  create_table "departments", force: :cascade do |t|
    t.string "name"
    t.string "slug", null: false
    t.text "notes"
    t.bigint "location_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "manager_id"
    t.index ["location_id"], name: "index_departments_on_location_id"
    t.index ["manager_id"], name: "index_departments_on_manager_id"
    t.index ["slug"], name: "index_departments_on_slug", unique: true
  end

  create_table "documentations", force: :cascade do |t|
    t.string "title"
    t.string "slug", null: false
    t.text "body"
    t.bigint "category_id", null: false
    t.bigint "created_by_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_documentations_on_category_id"
    t.index ["created_by_id"], name: "index_documentations_on_created_by_id"
    t.index ["slug"], name: "index_documentations_on_slug", unique: true
  end

  create_table "emails", force: :cascade do |t|
    t.string "email"
    t.text "notes"
    t.bigint "contact_id", null: false
    t.bigint "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_emails_on_category_id"
    t.index ["contact_id"], name: "index_emails_on_contact_id"
    t.index ["email"], name: "index_emails_on_email", unique: true
  end

  create_table "fields", force: :cascade do |t|
    t.string "name"
    t.string "format"
    t.string "element"
    t.string "description"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "fieldset_associations", force: :cascade do |t|
    t.bigint "fieldset_id", null: false
    t.string "fieldable_type", null: false
    t.bigint "fieldable_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["fieldable_type", "fieldable_id"], name: "index_fieldset_associations_on_fieldable_type_and_fieldable_id"
    t.index ["fieldset_id"], name: "index_fieldset_associations_on_fieldset_id"
  end

  create_table "fieldsets", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ip_leases", force: :cascade do |t|
    t.bigint "nic_id", null: false
    t.inet "address"
    t.boolean "active", default: true, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["nic_id"], name: "index_ip_leases_on_nic_id"
  end

  create_table "ldaps", force: :cascade do |t|
    t.string "name", null: false
    t.string "host"
    t.string "port"
    t.string "domain"
    t.string "username"
    t.string "password"
    t.string "tree_base"
    t.string "user_search"
    t.string "sync_interval"
    t.bigint "company_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_ldaps_on_company_id"
  end

  create_table "licenses", force: :cascade do |t|
    t.string "name", null: false
    t.integer "qty"
    t.text "key"
    t.string "licenser_name"
    t.string "licenser_email"
    t.boolean "reassignable", default: false, null: false
    t.integer "cost_cents"
    t.string "cost_currency", default: "USD", null: false
    t.datetime "purchased_at", precision: nil
    t.datetime "expires_at", precision: nil
    t.datetime "terminates_at", precision: nil
    t.boolean "maintained", default: false, null: false
    t.text "notes"
    t.bigint "category_id", null: false
    t.bigint "vendor_id"
    t.bigint "manufacturer_id", null: false
    t.bigint "status_label_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_licenses_on_category_id"
    t.index ["manufacturer_id"], name: "index_licenses_on_manufacturer_id"
    t.index ["status_label_id"], name: "index_licenses_on_status_label_id"
    t.index ["vendor_id"], name: "index_licenses_on_vendor_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name", null: false
    t.string "slug", null: false
    t.string "currency"
    t.bigint "parent_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["parent_id"], name: "index_locations_on_parent_id"
    t.index ["slug"], name: "index_locations_on_slug", unique: true
  end

  create_table "manufacturers", force: :cascade do |t|
    t.string "name"
    t.string "slug", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_manufacturers_on_slug", unique: true
  end

  create_table "models", force: :cascade do |t|
    t.string "name"
    t.string "slug", null: false
    t.string "model_number"
    t.text "notes"
    t.bigint "category_id", null: false
    t.bigint "manufacturer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_models_on_category_id"
    t.index ["manufacturer_id"], name: "index_models_on_manufacturer_id"
    t.index ["slug"], name: "index_models_on_slug", unique: true
  end

  create_table "networks", force: :cascade do |t|
    t.string "name"
    t.cidr "address"
    t.inet "gateway"
    t.inet "dhcp_start"
    t.inet "dhcp_end"
    t.integer "vlan_id"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "nics", force: :cascade do |t|
    t.macaddr "mac"
    t.integer "nic_type", null: false
    t.bigint "item_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_nics_on_item_id"
  end

  create_table "orders", force: :cascade do |t|
    t.string "number"
    t.bigint "user_id", null: false
    t.text "notes"
    t.datetime "submitted_at", precision: nil
    t.datetime "ordered_at", precision: nil
    t.datetime "expected_at", precision: nil
    t.datetime "delivered_at", precision: nil
    t.datetime "canceled_at", precision: nil
    t.datetime "returned_at", precision: nil
    t.string "discount_decription"
    t.string "returned_reason"
    t.string "canceled_reason"
    t.integer "shipping_cents"
    t.string "shipping_currency", default: "USD", null: false
    t.integer "tax_cents"
    t.string "tax_currency", default: "USD", null: false
    t.integer "discount_cents"
    t.string "discount_currency", default: "USD", null: false
    t.bigint "vendor_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["number"], name: "index_orders_on_number", unique: true
    t.index ["user_id"], name: "index_orders_on_user_id"
    t.index ["vendor_id"], name: "index_orders_on_vendor_id"
  end

  create_table "ownerships", force: :cascade do |t|
    t.bigint "company_id", null: false
    t.bigint "department_id"
    t.string "ownable_type", null: false
    t.bigint "ownable_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_ownerships_on_company_id"
    t.index ["department_id"], name: "index_ownerships_on_department_id"
    t.index ["ownable_type", "ownable_id"], name: "index_ownerships_on_ownable_type_and_ownable_id"
  end

  create_table "people", force: :cascade do |t|
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.boolean "active", default: true, null: false
    t.string "employee_number"
    t.string "job_title"
    t.string "guid"
    t.bigint "user_id"
    t.bigint "manager_id"
    t.bigint "location_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["guid"], name: "index_people_on_guid", unique: true
    t.index ["location_id"], name: "index_people_on_location_id"
    t.index ["manager_id"], name: "index_people_on_manager_id"
    t.index ["user_id"], name: "index_people_on_user_id"
  end

  create_table "people_roles", id: false, force: :cascade do |t|
    t.bigint "person_id"
    t.bigint "role_id"
    t.index ["person_id", "role_id"], name: "index_people_roles_on_person_id_and_role_id"
    t.index ["person_id"], name: "index_people_roles_on_person_id"
    t.index ["role_id"], name: "index_people_roles_on_role_id"
  end

  create_table "person_group_assignments", force: :cascade do |t|
    t.bigint "person_id", null: false
    t.bigint "person_group_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["person_group_id"], name: "index_person_group_assignments_on_person_group_id"
    t.index ["person_id"], name: "index_person_group_assignments_on_person_id"
  end

  create_table "person_groups", force: :cascade do |t|
    t.string "name"
    t.string "slug", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_person_groups_on_slug", unique: true
  end

  create_table "person_groups_roles", id: false, force: :cascade do |t|
    t.bigint "person_group_id"
    t.bigint "role_id"
    t.index ["person_group_id", "role_id"], name: "index_person_groups_roles_on_person_group_id_and_role_id"
    t.index ["person_group_id"], name: "index_person_groups_roles_on_person_group_id"
    t.index ["role_id"], name: "index_person_groups_roles_on_role_id"
  end

  create_table "pg_search_documents", force: :cascade do |t|
    t.text "content"
    t.string "searchable_type"
    t.bigint "searchable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable"
  end

  create_table "phones", force: :cascade do |t|
    t.string "number", null: false
    t.string "extension"
    t.text "notes"
    t.bigint "contact_id", null: false
    t.bigint "category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_phones_on_category_id"
    t.index ["contact_id"], name: "index_phones_on_contact_id"
  end

  create_table "purchases", force: :cascade do |t|
    t.string "purchasable_type", null: false
    t.bigint "purchasable_id", null: false
    t.bigint "order_id"
    t.integer "cost_cents", default: 0, null: false
    t.string "cost_currency", default: "USD", null: false
    t.integer "qty"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["order_id"], name: "index_purchases_on_order_id"
    t.index ["purchasable_type", "purchasable_id"], name: "index_purchases_on_purchasable_type_and_purchasable_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.string "resource_type"
    t.bigint "resource_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "resource_type", "resource_id"], name: "index_roles_on_name_and_resource_type_and_resource_id"
    t.index ["resource_type", "resource_id"], name: "index_roles_on_resource"
  end

  create_table "smtps", force: :cascade do |t|
    t.string "name"
    t.string "host"
    t.integer "port"
    t.integer "security", default: 0
    t.string "username"
    t.string "password"
    t.string "domain"
    t.string "address"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "status_labels", force: :cascade do |t|
    t.string "name"
    t.integer "status_type", default: 0
    t.string "slug", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_status_labels_on_slug", unique: true
  end

  create_table "ticket_assignments", force: :cascade do |t|
    t.bigint "person_id", null: false
    t.bigint "ticket_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["person_id"], name: "index_ticket_assignments_on_person_id"
    t.index ["ticket_id"], name: "index_ticket_assignments_on_ticket_id"
  end

  create_table "ticket_messages", force: :cascade do |t|
    t.text "body"
    t.bigint "ticket_id", null: false
    t.bigint "parent_id"
    t.bigint "created_by_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_by_id"], name: "index_ticket_messages_on_created_by_id"
    t.index ["parent_id"], name: "index_ticket_messages_on_parent_id"
    t.index ["ticket_id"], name: "index_ticket_messages_on_ticket_id"
  end

  create_table "ticket_statuses", force: :cascade do |t|
    t.string "name"
    t.integer "status_type", default: 0
    t.string "slug", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_ticket_statuses_on_slug", unique: true
  end

  create_table "tickets", force: :cascade do |t|
    t.string "subject", null: false
    t.serial "number", null: false
    t.text "description"
    t.integer "priority"
    t.bigint "status_id"
    t.bigint "primary_contact_id"
    t.bigint "created_by_id"
    t.bigint "asset_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["asset_id"], name: "index_tickets_on_asset_id"
    t.index ["created_by_id"], name: "index_tickets_on_created_by_id"
    t.index ["number"], name: "index_tickets_on_number", unique: true
    t.index ["primary_contact_id"], name: "index_tickets_on_primary_contact_id"
    t.index ["status_id"], name: "index_tickets_on_status_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at", precision: nil
    t.datetime "remember_created_at", precision: nil
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at", precision: nil
    t.datetime "last_sign_in_at", precision: nil
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at", precision: nil
    t.datetime "confirmation_sent_at", precision: nil
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at", precision: nil
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "invitation_token"
    t.datetime "invitation_created_at"
    t.datetime "invitation_sent_at"
    t.datetime "invitation_accepted_at"
    t.integer "invitation_limit"
    t.string "invited_by_type"
    t.bigint "invited_by_id"
    t.integer "invitations_count", default: 0
    t.bigint "active_company_id"
    t.boolean "active", default: true
    t.jsonb "table_preferences", default: {}
    t.jsonb "user_preferences", default: {}
    t.index ["active_company_id"], name: "index_users_on_active_company_id"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["invitation_token"], name: "index_users_on_invitation_token", unique: true
    t.index ["invited_by_id"], name: "index_users_on_invited_by_id"
    t.index ["invited_by_type", "invited_by_id"], name: "index_users_on_invited_by"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["table_preferences"], name: "index_users_on_table_preferences", using: :gin
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
    t.index ["user_preferences"], name: "index_users_on_user_preferences", using: :gin
  end

  create_table "users_roles", id: false, force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "role_id"
    t.index ["role_id"], name: "index_users_roles_on_role_id"
    t.index ["user_id", "role_id"], name: "index_users_roles_on_user_id_and_role_id"
    t.index ["user_id"], name: "index_users_roles_on_user_id"
  end

  create_table "vendors", force: :cascade do |t|
    t.string "name", null: false
    t.string "slug", null: false
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_vendors_on_slug", unique: true
  end

  create_table "warranties", force: :cascade do |t|
    t.bigint "asset_id", null: false
    t.integer "length"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["asset_id"], name: "index_warranties_on_asset_id"
  end

  create_table "websites", force: :cascade do |t|
    t.string "url"
    t.string "name"
    t.string "notes"
    t.bigint "contact_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["contact_id"], name: "index_websites_on_contact_id"
  end

  add_foreign_key "addresses", "categories"
  add_foreign_key "addresses", "contacts"
  add_foreign_key "assets", "locations", column: "default_location_id"
  add_foreign_key "assets", "models"
  add_foreign_key "assets", "status_labels"
  add_foreign_key "assets", "vendors"
  add_foreign_key "assignments", "locations"
  add_foreign_key "assignments", "users", column: "created_by_id"
  add_foreign_key "companies", "smtps", column: "app_smtp_id"
  add_foreign_key "companies", "smtps", column: "tickets_smtp_id"
  add_foreign_key "contacts", "addresses", column: "primary_address_id"
  add_foreign_key "contacts", "emails", column: "primary_email_id"
  add_foreign_key "contacts", "phones", column: "primary_phone_id"
  add_foreign_key "contracts", "categories"
  add_foreign_key "contracts", "vendors"
  add_foreign_key "departments", "locations"
  add_foreign_key "departments", "people", column: "manager_id"
  add_foreign_key "documentations", "categories"
  add_foreign_key "documentations", "people", column: "created_by_id"
  add_foreign_key "emails", "categories"
  add_foreign_key "emails", "contacts"
  add_foreign_key "fieldset_associations", "fieldsets"
  add_foreign_key "ip_leases", "nics"
  add_foreign_key "ldaps", "companies"
  add_foreign_key "licenses", "categories"
  add_foreign_key "licenses", "manufacturers"
  add_foreign_key "licenses", "status_labels"
  add_foreign_key "licenses", "vendors"
  add_foreign_key "locations", "locations", column: "parent_id"
  add_foreign_key "models", "categories"
  add_foreign_key "models", "manufacturers"
  add_foreign_key "nics", "assets", column: "item_id"
  add_foreign_key "orders", "users"
  add_foreign_key "orders", "vendors"
  add_foreign_key "ownerships", "companies"
  add_foreign_key "ownerships", "departments"
  add_foreign_key "people", "locations"
  add_foreign_key "people", "people", column: "manager_id"
  add_foreign_key "people", "users"
  add_foreign_key "person_group_assignments", "people"
  add_foreign_key "person_group_assignments", "person_groups"
  add_foreign_key "phones", "categories"
  add_foreign_key "phones", "contacts"
  add_foreign_key "purchases", "orders"
  add_foreign_key "ticket_assignments", "people"
  add_foreign_key "ticket_assignments", "tickets"
  add_foreign_key "ticket_messages", "people", column: "created_by_id"
  add_foreign_key "ticket_messages", "ticket_messages", column: "parent_id"
  add_foreign_key "ticket_messages", "tickets"
  add_foreign_key "tickets", "assets"
  add_foreign_key "tickets", "people", column: "created_by_id"
  add_foreign_key "tickets", "people", column: "primary_contact_id"
  add_foreign_key "tickets", "ticket_statuses", column: "status_id"
  add_foreign_key "users", "companies", column: "active_company_id"
  add_foreign_key "warranties", "assets"
  add_foreign_key "websites", "contacts"
end
