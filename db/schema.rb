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

ActiveRecord::Schema[7.0].define(version: 2021_07_31_153226) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_trgm"
  enable_extension "plpgsql"

  create_table "accessories", force: :cascade do |t|
    t.string "name"
    t.string "serial"
    t.string "asset_tag"
    t.integer "min_qty"
    t.integer "qty"
    t.integer "cost_cents"
    t.string "cost_currency", default: "USD", null: false
    t.boolean "requestable", default: true, null: false
    t.text "notes"
    t.integer "model_id", null: false
    t.integer "vendor_id"
    t.integer "default_location_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["default_location_id"], name: "index_accessories_on_default_location_id"
    t.index ["model_id"], name: "index_accessories_on_model_id"
    t.index ["vendor_id"], name: "index_accessories_on_vendor_id"
  end

  create_table "addresses", force: :cascade do |t|
    t.string "address", null: false
    t.string "address_2"
    t.string "city"
    t.string "region"
    t.string "country"
    t.string "postal"
    t.text "notes"
    t.integer "contact_id", null: false
    t.integer "category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_addresses_on_category_id"
    t.index ["contact_id"], name: "index_addresses_on_contact_id"
  end

  create_table "assignments", force: :cascade do |t|
    t.string "assignable_type", null: false
    t.integer "assignable_id", null: false
    t.string "assign_toable_type", null: false
    t.integer "assign_toable_id", null: false
    t.integer "qty", default: 1
    t.integer "status", default: 0
    t.datetime "assigned_at", precision: nil
    t.datetime "returned_at", precision: nil
    t.datetime "expected_at", precision: nil
    t.text "notes"
    t.boolean "active", default: true, null: false
    t.integer "created_by_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assign_toable_type", "assign_toable_id"], name: "index_assignments_on_assign_toable_type_and_assign_toable_id"
    t.index ["assignable_type", "assignable_id"], name: "index_assignments_on_assignable_type_and_assignable_id"
    t.index ["created_by_id"], name: "index_assignments_on_created_by_id"
  end

  create_table "audits", force: :cascade do |t|
    t.integer "auditable_id"
    t.string "auditable_type"
    t.integer "associated_id"
    t.string "associated_type"
    t.integer "user_id"
    t.string "user_type"
    t.string "username"
    t.string "action"
    t.jsonb "audited_changes"
    t.integer "version", default: 0
    t.string "comment"
    t.string "remote_address"
    t.string "request_uuid"
    t.datetime "created_at", precision: nil
    t.index ["associated_type", "associated_id"], name: "associated_index"
    t.index ["auditable_type", "auditable_id", "version"], name: "auditable_index"
    t.index ["created_at"], name: "index_audits_on_created_at"
    t.index ["request_uuid"], name: "index_audits_on_request_uuid"
    t.index ["user_id", "user_type"], name: "user_index"
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
    t.index ["slug"], name: "index_companies_on_slug", unique: true
  end

  create_table "components", force: :cascade do |t|
    t.string "name"
    t.string "serial"
    t.integer "min_qty"
    t.integer "qty"
    t.integer "cost_cents"
    t.string "cost_currency", default: "USD", null: false
    t.datetime "purchased_at", precision: nil
    t.text "notes"
    t.bigint "model_id", null: false
    t.bigint "vendor_id", null: false
    t.bigint "default_location_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["default_location_id"], name: "index_components_on_default_location_id"
    t.index ["model_id"], name: "index_components_on_model_id"
    t.index ["serial"], name: "index_components_on_serial", unique: true
    t.index ["vendor_id"], name: "index_components_on_vendor_id"
  end

  create_table "consumables", force: :cascade do |t|
    t.string "name"
    t.integer "min_qty"
    t.integer "qty"
    t.integer "cost_cents"
    t.string "cost_currency", default: "USD", null: false
    t.boolean "requestable", default: true, null: false
    t.text "notes"
    t.integer "model_id", null: false
    t.integer "vendor_id", null: false
    t.integer "default_location_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["default_location_id"], name: "index_consumables_on_default_location_id"
    t.index ["model_id"], name: "index_consumables_on_model_id"
    t.index ["vendor_id"], name: "index_consumables_on_vendor_id"
  end

  create_table "contacts", force: :cascade do |t|
    t.text "notes"
    t.string "contactable_type"
    t.integer "contactable_id"
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
    t.string "name"
    t.string "number"
    t.text "notes"
    t.datetime "begins_at", precision: nil
    t.datetime "ends_at", precision: nil
    t.integer "vendor_id", null: false
    t.integer "category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_contracts_on_category_id"
    t.index ["vendor_id"], name: "index_contracts_on_vendor_id"
  end

  create_table "departments", force: :cascade do |t|
    t.string "name"
    t.string "slug", null: false
    t.integer "location_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "manager_id"
    t.index ["location_id"], name: "index_departments_on_location_id"
    t.index ["manager_id"], name: "index_departments_on_manager_id"
    t.index ["slug"], name: "index_departments_on_slug", unique: true
  end

  create_table "emails", force: :cascade do |t|
    t.string "email"
    t.text "notes"
    t.integer "contact_id", null: false
    t.integer "category_id", null: false
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
    t.integer "fieldset_id", null: false
    t.string "fieldable_type", null: false
    t.integer "fieldable_id", null: false
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
    t.integer "nic_id", null: false
    t.inet "address"
    t.boolean "active", default: true, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["nic_id"], name: "index_ip_leases_on_nic_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.string "asset_tag"
    t.string "serial"
    t.integer "cost_cents"
    t.string "cost_currency", default: "USD", null: false
    t.datetime "purchased_at", precision: nil
    t.boolean "requestable", default: false, null: false
    t.text "notes"
    t.integer "model_id", null: false
    t.integer "vendor_id"
    t.integer "default_location_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["asset_tag"], name: "index_items_on_asset_tag", unique: true
    t.index ["default_location_id"], name: "index_items_on_default_location_id"
    t.index ["model_id"], name: "index_items_on_model_id"
    t.index ["serial"], name: "index_items_on_serial", unique: true
    t.index ["vendor_id"], name: "index_items_on_vendor_id"
  end

  create_table "licenses", force: :cascade do |t|
    t.string "name"
    t.integer "seats"
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
    t.integer "category_id", null: false
    t.integer "vendor_id"
    t.integer "manufacturer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_licenses_on_category_id"
    t.index ["manufacturer_id"], name: "index_licenses_on_manufacturer_id"
    t.index ["vendor_id"], name: "index_licenses_on_vendor_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.string "slug", null: false
    t.integer "parent_id"
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
    t.integer "category_id", null: false
    t.integer "manufacturer_id", null: false
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
    t.integer "user_id", null: false
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
    t.integer "vendor_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["number"], name: "index_orders_on_number", unique: true
    t.index ["user_id"], name: "index_orders_on_user_id"
    t.index ["vendor_id"], name: "index_orders_on_vendor_id"
  end

  create_table "ownerships", force: :cascade do |t|
    t.integer "company_id", null: false
    t.integer "department_id"
    t.string "ownable_type", null: false
    t.integer "ownable_id", null: false
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
    t.integer "manager_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["manager_id"], name: "index_people_on_manager_id"
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
    t.integer "contact_id", null: false
    t.integer "category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_phones_on_category_id"
    t.index ["contact_id"], name: "index_phones_on_contact_id"
  end

  create_table "purchases", force: :cascade do |t|
    t.string "purchasable_type", null: false
    t.integer "purchasable_id", null: false
    t.integer "order_id"
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
    t.integer "resource_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "resource_type", "resource_id"], name: "index_roles_on_name_and_resource_type_and_resource_id"
    t.index ["resource_type", "resource_id"], name: "index_roles_on_resource_type_and_resource_id"
  end

  create_table "status_types", force: :cascade do |t|
    t.string "name"
    t.string "slug", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_status_types_on_slug", unique: true
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
    t.bigint "person_id"
    t.bigint "active_company_id"
    t.boolean "active", default: true
    t.jsonb "table_preferences", default: {}
    t.jsonb "user_preferences", default: {}
    t.index ["active_company_id"], name: "index_users_on_active_company_id"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["person_id"], name: "index_users_on_person_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["table_preferences"], name: "index_users_on_table_preferences", using: :gin
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
    t.index ["user_preferences"], name: "index_users_on_user_preferences", using: :gin
  end

  create_table "users_roles", id: false, force: :cascade do |t|
    t.integer "user_id"
    t.integer "role_id"
    t.index ["role_id"], name: "index_users_roles_on_role_id"
    t.index ["user_id", "role_id"], name: "index_users_roles_on_user_id_and_role_id"
    t.index ["user_id"], name: "index_users_roles_on_user_id"
  end

  create_table "vendors", force: :cascade do |t|
    t.string "name"
    t.string "slug", null: false
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_vendors_on_slug", unique: true
  end

  create_table "warranties", force: :cascade do |t|
    t.integer "item_id", null: false
    t.integer "length"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_warranties_on_item_id"
  end

  create_table "websites", force: :cascade do |t|
    t.string "url"
    t.string "name"
    t.string "notes"
    t.integer "contact_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["contact_id"], name: "index_websites_on_contact_id"
  end

  add_foreign_key "accessories", "locations", column: "default_location_id"
  add_foreign_key "accessories", "models"
  add_foreign_key "accessories", "vendors"
  add_foreign_key "addresses", "categories"
  add_foreign_key "addresses", "contacts"
  add_foreign_key "assignments", "users", column: "created_by_id"
  add_foreign_key "components", "locations", column: "default_location_id"
  add_foreign_key "components", "models"
  add_foreign_key "components", "vendors"
  add_foreign_key "consumables", "locations", column: "default_location_id"
  add_foreign_key "consumables", "models"
  add_foreign_key "consumables", "vendors"
  add_foreign_key "contacts", "addresses", column: "primary_address_id"
  add_foreign_key "contacts", "emails", column: "primary_email_id"
  add_foreign_key "contacts", "phones", column: "primary_phone_id"
  add_foreign_key "contracts", "categories"
  add_foreign_key "contracts", "vendors"
  add_foreign_key "departments", "locations"
  add_foreign_key "departments", "people", column: "manager_id"
  add_foreign_key "emails", "categories"
  add_foreign_key "emails", "contacts"
  add_foreign_key "fieldset_associations", "fieldsets"
  add_foreign_key "ip_leases", "nics"
  add_foreign_key "items", "locations", column: "default_location_id"
  add_foreign_key "items", "models"
  add_foreign_key "items", "vendors"
  add_foreign_key "licenses", "categories"
  add_foreign_key "licenses", "manufacturers"
  add_foreign_key "licenses", "vendors"
  add_foreign_key "locations", "locations", column: "parent_id"
  add_foreign_key "models", "categories"
  add_foreign_key "models", "manufacturers"
  add_foreign_key "nics", "items"
  add_foreign_key "orders", "users"
  add_foreign_key "orders", "vendors"
  add_foreign_key "ownerships", "companies"
  add_foreign_key "ownerships", "departments"
  add_foreign_key "people", "people", column: "manager_id"
  add_foreign_key "phones", "categories"
  add_foreign_key "phones", "contacts"
  add_foreign_key "purchases", "orders"
  add_foreign_key "users", "companies", column: "active_company_id"
  add_foreign_key "users", "people"
  add_foreign_key "warranties", "items"
  add_foreign_key "websites", "contacts"
end
