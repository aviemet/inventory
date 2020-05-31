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

ActiveRecord::Schema.define(version: 2020_05_19_052814) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accessories", force: :cascade do |t|
    t.string "name"
    t.bigint "item_id", null: false
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["item_id"], name: "index_accessories_on_item_id"
  end

  create_table "addresses", force: :cascade do |t|
    t.string "address", null: false
    t.string "address_2"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.text "notes"
    t.bigint "contact_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["contact_id"], name: "index_addresses_on_contact_id"
  end

  create_table "brands", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "companies", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "contact_types", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "contacts", force: :cascade do |t|
    t.text "notes"
    t.bigint "contact_type_id"
    t.string "contactable_type"
    t.bigint "contactable_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["contact_type_id"], name: "index_contacts_on_contact_type_id"
    t.index ["contactable_type", "contactable_id"], name: "index_contacts_on_contactable_type_and_contactable_id"
  end

  create_table "contract_types", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "contracts", force: :cascade do |t|
    t.bigint "contract_type_id", null: false
    t.bigint "vendor_id", null: false
    t.string "system"
    t.text "description"
    t.text "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["contract_type_id"], name: "index_contracts_on_contract_type_id"
    t.index ["vendor_id"], name: "index_contracts_on_vendor_id"
  end

  create_table "departments", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "company_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_departments_on_company_id"
  end

  create_table "emails", force: :cascade do |t|
    t.string "email", null: false
    t.text "notes"
    t.bigint "contact_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["contact_id"], name: "index_emails_on_contact_id"
  end

  create_table "interfaces_ipv4s", force: :cascade do |t|
    t.bigint "network_interface_id", null: false
    t.bigint "ipv4_address_id", null: false
    t.boolean "active"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ipv4_address_id"], name: "index_interfaces_ipv4s_on_ipv4_address_id"
    t.index ["network_interface_id"], name: "index_interfaces_ipv4s_on_network_interface_id"
  end

  create_table "interfaces_ipv6s", force: :cascade do |t|
    t.bigint "network_interface_id", null: false
    t.bigint "ipv6_address_id", null: false
    t.boolean "active"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ipv6_address_id"], name: "index_interfaces_ipv6s_on_ipv6_address_id"
    t.index ["network_interface_id"], name: "index_interfaces_ipv6s_on_network_interface_id"
  end

  create_table "ipv4_addresses", force: :cascade do |t|
    t.inet "address", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ipv6_addresses", force: :cascade do |t|
    t.inet "address", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "item_categories", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "title"
    t.string "model"
    t.string "serial"
    t.text "description"
    t.text "notes"
    t.boolean "consumeable"
    t.integer "qty"
    t.string "os"
    t.decimal "memory"
    t.decimal "storage"
    t.string "cpu"
    t.decimal "cpu_speed"
    t.string "gpu"
    t.decimal "gpu_speed"
    t.decimal "gpu_memory"
    t.bigint "item_category_id", null: false
    t.bigint "brand_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["brand_id"], name: "index_items_on_brand_id"
    t.index ["item_category_id"], name: "index_items_on_item_category_id"
  end

  create_table "items_assignments", force: :cascade do |t|
    t.bigint "item_id", null: false
    t.bigint "person_id", null: false
    t.bigint "department_id", null: false
    t.boolean "active"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["department_id"], name: "index_items_assignments_on_department_id"
    t.index ["item_id"], name: "index_items_assignments_on_item_id"
    t.index ["person_id"], name: "index_items_assignments_on_person_id"
  end

  create_table "licenses", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.integer "seats"
    t.text "key"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "contact_id", null: false
    t.bigint "company_id", null: false
    t.bigint "parent_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_locations_on_company_id"
    t.index ["contact_id"], name: "index_locations_on_contact_id"
    t.index ["parent_id"], name: "index_locations_on_parent_id"
  end

  create_table "network_interfaces", force: :cascade do |t|
    t.macaddr "mac"
    t.bigint "item_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["item_id"], name: "index_network_interfaces_on_item_id"
  end

  create_table "networks", force: :cascade do |t|
    t.string "name"
    t.cidr "ipv4"
    t.inet "v4_gateway"
    t.inet "v4_dhcp_start"
    t.inet "v4_dhcp_end"
    t.integer "vland_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
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
    t.boolean "active"
    t.bigint "department_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["department_id"], name: "index_people_on_department_id"
  end

  create_table "phones", force: :cascade do |t|
    t.string "number", null: false
    t.string "extension"
    t.text "notes"
    t.bigint "contact_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["contact_id"], name: "index_phones_on_contact_id"
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
    t.integer "level"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_roles_on_name", unique: true
  end

  create_table "user_companies", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "company_id", null: false
    t.bigint "role_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_user_companies_on_company_id"
    t.index ["role_id"], name: "index_user_companies_on_role_id"
    t.index ["user_id"], name: "index_user_companies_on_user_id"
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

  create_table "vendors", force: :cascade do |t|
    t.string "name"
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "accessories", "items"
  add_foreign_key "addresses", "contacts"
  add_foreign_key "contracts", "contract_types"
  add_foreign_key "contracts", "vendors"
  add_foreign_key "departments", "companies"
  add_foreign_key "emails", "contacts"
  add_foreign_key "interfaces_ipv4s", "ipv4_addresses"
  add_foreign_key "interfaces_ipv4s", "network_interfaces"
  add_foreign_key "interfaces_ipv6s", "ipv6_addresses"
  add_foreign_key "interfaces_ipv6s", "network_interfaces"
  add_foreign_key "items", "brands"
  add_foreign_key "items", "item_categories"
  add_foreign_key "items_assignments", "departments"
  add_foreign_key "items_assignments", "items"
  add_foreign_key "items_assignments", "people"
  add_foreign_key "locations", "companies"
  add_foreign_key "locations", "contacts"
  add_foreign_key "locations", "locations", column: "parent_id"
  add_foreign_key "network_interfaces", "items"
  add_foreign_key "orders", "users"
  add_foreign_key "orders", "vendors"
  add_foreign_key "ownerships", "companies"
  add_foreign_key "ownerships", "departments"
  add_foreign_key "people", "departments"
  add_foreign_key "phones", "contacts"
  add_foreign_key "user_companies", "companies"
  add_foreign_key "user_companies", "roles"
  add_foreign_key "user_companies", "users"
  add_foreign_key "users", "companies", column: "active_company_id"
  add_foreign_key "users", "people"
end
