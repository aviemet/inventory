# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_14_035238) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accessories", force: :cascade do |t|
    t.string "name"
    t.string "serial"
    t.string "model_number"
    t.integer "min_qty"
    t.integer "qty"
    t.decimal "cost", precision: 10, scale: 2
    t.date "purchase_date"
    t.boolean "requestable"
    t.text "notes"
    t.bigint "manufacturer_id", null: false
    t.bigint "accessory_category_id", null: false
    t.bigint "vendor_id"
    t.bigint "default_location_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["accessory_category_id"], name: "index_accessories_on_accessory_category_id"
    t.index ["default_location_id"], name: "index_accessories_on_default_location_id"
    t.index ["manufacturer_id"], name: "index_accessories_on_manufacturer_id"
    t.index ["vendor_id"], name: "index_accessories_on_vendor_id"
  end

  create_table "accessory_categories", force: :cascade do |t|
    t.string "name"
    t.string "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "address_types", force: :cascade do |t|
    t.text "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
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
    t.bigint "address_type_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["address_type_id"], name: "index_addresses_on_address_type_id"
    t.index ["contact_id"], name: "index_addresses_on_contact_id"
  end

  create_table "assignments", force: :cascade do |t|
    t.string "assignable_type", null: false
    t.bigint "assignable_id", null: false
    t.string "assign_toable_type", null: false
    t.bigint "assign_toable_id", null: false
    t.date "date_assigned"
    t.date "date_expected"
    t.date "date_returned"
    t.text "notes"
    t.boolean "active"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["assign_toable_type", "assign_toable_id"], name: "index_assignments_on_assign_toable_type_and_assign_toable_id"
    t.index ["assignable_type", "assignable_id"], name: "index_assignments_on_assignable_type_and_assignable_id"
  end

  create_table "companies", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_companies_on_name", unique: true
  end

  create_table "consumable_categories", force: :cascade do |t|
    t.string "name"
    t.text "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "consumables", force: :cascade do |t|
    t.string "name"
    t.string "model_number"
    t.integer "min_qty"
    t.integer "qty"
    t.decimal "cost", precision: 10, scale: 2
    t.boolean "requestable"
    t.text "notes"
    t.bigint "manufacturer_id", null: false
    t.bigint "consumable_category_id", null: false
    t.bigint "vendor_id", null: false
    t.bigint "default_location_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["consumable_category_id"], name: "index_consumables_on_consumable_category_id"
    t.index ["default_location_id"], name: "index_consumables_on_default_location_id"
    t.index ["manufacturer_id"], name: "index_consumables_on_manufacturer_id"
    t.index ["vendor_id"], name: "index_consumables_on_vendor_id"
  end

  create_table "contacts", force: :cascade do |t|
    t.text "notes"
    t.string "contactable_type"
    t.bigint "contactable_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "primary_address_id"
    t.bigint "primary_phone_id"
    t.bigint "primary_email_id"
    t.index ["contactable_type", "contactable_id"], name: "index_contacts_on_contactable_type_and_contactable_id"
    t.index ["primary_address_id"], name: "index_contacts_on_primary_address_id"
    t.index ["primary_email_id"], name: "index_contacts_on_primary_email_id"
    t.index ["primary_phone_id"], name: "index_contacts_on_primary_phone_id"
  end

  create_table "contract_types", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "contracts", force: :cascade do |t|
    t.bigint "contract_type_id", null: false
    t.bigint "vendor_id", null: false
    t.text "description"
    t.text "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["contract_type_id"], name: "index_contracts_on_contract_type_id"
    t.index ["vendor_id"], name: "index_contracts_on_vendor_id"
  end

  create_table "departments", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "location_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "manager_id"
    t.index ["location_id"], name: "index_departments_on_location_id"
    t.index ["manager_id"], name: "index_departments_on_manager_id"
    t.index ["name"], name: "index_departments_on_name", unique: true
  end

  create_table "email_types", force: :cascade do |t|
    t.text "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "emails", force: :cascade do |t|
    t.string "email"
    t.text "notes"
    t.bigint "contact_id", null: false
    t.bigint "email_type_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["contact_id"], name: "index_emails_on_contact_id"
    t.index ["email_type_id"], name: "index_emails_on_email_type_id"
  end

  create_table "fields", force: :cascade do |t|
    t.string "name"
    t.string "format"
    t.string "element"
    t.string "description"
    t.text "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "fieldset_associations", force: :cascade do |t|
    t.bigint "fieldset_id", null: false
    t.string "fieldable_type", null: false
    t.bigint "fieldable_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fieldable_type", "fieldable_id"], name: "index_fieldset_associations_on_fieldable_type_and_fieldable_id"
    t.index ["fieldset_id"], name: "index_fieldset_associations_on_fieldset_id"
  end

  create_table "fieldsets", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ips", force: :cascade do |t|
    t.inet "address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "item_categories", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_item_categories_on_name", unique: true
  end

  create_table "items", force: :cascade do |t|
    t.string "title"
    t.string "asset_tag"
    t.string "serial"
    t.decimal "cost", precision: 10, scale: 2
    t.date "purchase_date"
    t.boolean "requestable", default: true
    t.text "notes"
    t.bigint "item_category_id"
    t.bigint "model_id", null: false
    t.bigint "vendor_id"
    t.bigint "default_location_id"
    t.bigint "parent_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["asset_tag"], name: "index_items_on_asset_tag", unique: true
    t.index ["default_location_id"], name: "index_items_on_default_location_id"
    t.index ["item_category_id"], name: "index_items_on_item_category_id"
    t.index ["model_id"], name: "index_items_on_model_id"
    t.index ["parent_id"], name: "index_items_on_parent_id"
    t.index ["serial"], name: "index_items_on_serial", unique: true
    t.index ["vendor_id"], name: "index_items_on_vendor_id"
  end

  create_table "licenses", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.integer "seats"
    t.text "key"
    t.bigint "model_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["key"], name: "index_licenses_on_key", unique: true
    t.index ["model_id"], name: "index_licenses_on_model_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.bigint "parent_id"
    t.index ["parent_id"], name: "index_locations_on_parent_id"
  end

  create_table "manufacturers", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_manufacturers_on_name", unique: true
  end

  create_table "models", force: :cascade do |t|
    t.string "name"
    t.string "model_number"
    t.text "notes"
    t.bigint "manufacturer_id", null: false
    t.bigint "item_category_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["item_category_id"], name: "index_models_on_item_category_id"
    t.index ["manufacturer_id"], name: "index_models_on_manufacturer_id"
    t.index ["name"], name: "index_models_on_name", unique: true
  end

  create_table "networks", force: :cascade do |t|
    t.string "name"
    t.cidr "ip"
    t.inet "gateway"
    t.inet "dhcp_start"
    t.inet "dhcp_end"
    t.integer "vland_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "nics", force: :cascade do |t|
    t.macaddr "mac"
    t.bigint "item_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["item_id"], name: "index_nics_on_item_id"
  end

  create_table "nics_ips", force: :cascade do |t|
    t.bigint "nic_id", null: false
    t.bigint "ip_id", null: false
    t.boolean "active"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ip_id"], name: "index_nics_ips_on_ip_id"
    t.index ["nic_id"], name: "index_nics_ips_on_nic_id"
  end

  create_table "orders", force: :cascade do |t|
    t.string "number"
    t.bigint "user_id", null: false
    t.date "ordered_on"
    t.date "delivered_on"
    t.date "canceled_on"
    t.date "returned_on"
    t.decimal "shipping", precision: 10, scale: 2
    t.decimal "tax", precision: 10, scale: 2
    t.decimal "discount", precision: 10, scale: 2
    t.bigint "vendor_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["number"], name: "index_orders_on_number", unique: true
    t.index ["user_id"], name: "index_orders_on_user_id"
    t.index ["vendor_id"], name: "index_orders_on_vendor_id"
  end

  create_table "ownerships", force: :cascade do |t|
    t.bigint "company_id", null: false
    t.bigint "department_id"
    t.string "ownable_type", null: false
    t.bigint "ownable_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_ownerships_on_company_id"
    t.index ["department_id"], name: "index_ownerships_on_department_id"
    t.index ["ownable_type", "ownable_id"], name: "index_ownerships_on_ownable_type_and_ownable_id"
  end

  create_table "people", force: :cascade do |t|
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.boolean "active", default: true
    t.string "employee_number"
    t.string "title"
    t.bigint "manager_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["manager_id"], name: "index_people_on_manager_id"
  end

  create_table "phone_types", force: :cascade do |t|
    t.text "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "phones", force: :cascade do |t|
    t.string "number", null: false
    t.string "extension"
    t.text "notes"
    t.bigint "contact_id", null: false
    t.bigint "phone_type_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["contact_id"], name: "index_phones_on_contact_id"
    t.index ["phone_type_id"], name: "index_phones_on_phone_type_id"
  end

  create_table "purchases", force: :cascade do |t|
    t.string "purchasable_type", null: false
    t.bigint "purchasable_id", null: false
    t.decimal "cost", precision: 10, scale: 2
    t.integer "qty"
    t.text "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["purchasable_type", "purchasable_id"], name: "index_purchases_on_purchasable_type_and_purchasable_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.string "resource_type"
    t.bigint "resource_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name", "resource_type", "resource_id"], name: "index_roles_on_name_and_resource_type_and_resource_id"
    t.index ["resource_type", "resource_id"], name: "index_roles_on_resource_type_and_resource_id"
  end

  create_table "status_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_status_types_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "person_id", null: false
    t.bigint "active_company_id"
    t.boolean "active", default: true
    t.index ["active_company_id"], name: "index_users_on_active_company_id"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["person_id"], name: "index_users_on_person_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  end

  create_table "users_roles", id: false, force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "role_id"
    t.index ["role_id"], name: "index_users_roles_on_role_id"
    t.index ["user_id", "role_id"], name: "index_users_roles_on_user_id_and_role_id"
    t.index ["user_id"], name: "index_users_roles_on_user_id"
  end

  create_table "vendors", force: :cascade do |t|
    t.string "name"
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "warranties", force: :cascade do |t|
    t.bigint "item_id", null: false
    t.integer "length"
    t.text "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["item_id"], name: "index_warranties_on_item_id"
  end

  create_table "websites", force: :cascade do |t|
    t.string "url"
    t.string "name"
    t.string "notes"
    t.bigint "contact_id", null: false
    t.bigint "contact_type_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["contact_id"], name: "index_websites_on_contact_id"
    t.index ["contact_type_id"], name: "index_websites_on_contact_type_id"
  end

  add_foreign_key "accessories", "accessory_categories"
  add_foreign_key "accessories", "locations", column: "default_location_id"
  add_foreign_key "accessories", "manufacturers"
  add_foreign_key "accessories", "vendors"
  add_foreign_key "addresses", "contacts"
  add_foreign_key "consumables", "consumable_categories"
  add_foreign_key "consumables", "locations", column: "default_location_id"
  add_foreign_key "consumables", "manufacturers"
  add_foreign_key "consumables", "vendors"
  add_foreign_key "contacts", "addresses", column: "primary_address_id"
  add_foreign_key "contacts", "emails", column: "primary_email_id"
  add_foreign_key "contacts", "phones", column: "primary_phone_id"
  add_foreign_key "contracts", "contract_types"
  add_foreign_key "contracts", "vendors"
  add_foreign_key "departments", "locations"
  add_foreign_key "departments", "people", column: "manager_id"
  add_foreign_key "emails", "contacts"
  add_foreign_key "fieldset_associations", "fieldsets"
  add_foreign_key "items", "items", column: "parent_id"
  add_foreign_key "items", "locations", column: "default_location_id"
  add_foreign_key "items", "models"
  add_foreign_key "items", "vendors"
  add_foreign_key "licenses", "models"
  add_foreign_key "locations", "locations", column: "parent_id"
  add_foreign_key "models", "item_categories"
  add_foreign_key "models", "manufacturers"
  add_foreign_key "nics", "items"
  add_foreign_key "nics_ips", "ips"
  add_foreign_key "nics_ips", "nics"
  add_foreign_key "orders", "users"
  add_foreign_key "orders", "vendors"
  add_foreign_key "ownerships", "companies"
  add_foreign_key "ownerships", "departments"
  add_foreign_key "people", "people", column: "manager_id"
  add_foreign_key "phones", "contacts"
  add_foreign_key "users", "companies", column: "active_company_id"
  add_foreign_key "users", "people"
  add_foreign_key "warranties", "items"
  add_foreign_key "websites", "contacts"
end
