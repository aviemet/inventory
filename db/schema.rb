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

ActiveRecord::Schema.define(version: 2019_11_29_172807) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.text "address", null: false
    t.text "address_2"
    t.text "city"
    t.text "state"
    t.text "zip"
    t.text "notes"
    t.bigint "contact_type_id"
    t.bigint "contact_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["contact_id"], name: "index_addresses_on_contact_id"
    t.index ["contact_type_id"], name: "index_addresses_on_contact_type_id"
  end

  create_table "brands", force: :cascade do |t|
    t.text "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "companies", force: :cascade do |t|
    t.text "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contact_types", force: :cascade do |t|
    t.text "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contacts", force: :cascade do |t|
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "contactable_type"
    t.bigint "contactable_id"
    t.index ["contactable_type", "contactable_id"], name: "index_contacts_on_contactable_type_and_contactable_id"
  end

  create_table "contract_types", force: :cascade do |t|
    t.text "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contracts", force: :cascade do |t|
    t.bigint "contract_type_id"
    t.bigint "vendor_id"
    t.text "system"
    t.text "description"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["contract_type_id"], name: "index_contracts_on_contract_type_id"
    t.index ["vendor_id"], name: "index_contracts_on_vendor_id"
  end

  create_table "departments", force: :cascade do |t|
    t.text "name", null: false
    t.bigint "company_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_departments_on_company_id"
  end

  create_table "emails", force: :cascade do |t|
    t.text "email", null: false
    t.text "notes"
    t.bigint "contact_type_id"
    t.bigint "contact_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["contact_id"], name: "index_emails_on_contact_id"
    t.index ["contact_type_id"], name: "index_emails_on_contact_type_id"
  end

  create_table "interfaces", force: :cascade do |t|
    t.text "mac"
    t.bigint "item_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_interfaces_on_item_id"
  end

  create_table "interfaces_ipv4s", force: :cascade do |t|
    t.bigint "interface_id", null: false
    t.bigint "ipv4_address_id", null: false
    t.boolean "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["interface_id"], name: "index_interfaces_ipv4s_on_interface_id"
    t.index ["ipv4_address_id"], name: "index_interfaces_ipv4s_on_ipv4_address_id"
  end

  create_table "interfaces_ipv6s", force: :cascade do |t|
    t.bigint "interface_id", null: false
    t.bigint "ipv6_address_id", null: false
    t.boolean "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["interface_id"], name: "index_interfaces_ipv6s_on_interface_id"
    t.index ["ipv6_address_id"], name: "index_interfaces_ipv6s_on_ipv6_address_id"
  end

  create_table "ipv4_addresses", force: :cascade do |t|
    t.text "address", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ipv6_addresses", force: :cascade do |t|
    t.text "address", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "item_assignments", force: :cascade do |t|
    t.bigint "item_id", null: false
    t.bigint "person_id"
    t.boolean "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "department_id"
    t.index ["department_id"], name: "index_item_assignments_on_department_id"
    t.index ["item_id"], name: "index_item_assignments_on_item_id"
    t.index ["person_id"], name: "index_item_assignments_on_person_id"
  end

  create_table "item_categories", force: :cascade do |t|
    t.text "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "items", force: :cascade do |t|
    t.text "title"
    t.text "model"
    t.text "serial"
    t.text "description"
    t.text "notes"
    t.boolean "consumeable", default: false
    t.integer "qty"
    t.text "os"
    t.decimal "memory"
    t.decimal "storage"
    t.text "cpu"
    t.decimal "cpu_speed"
    t.text "gpu"
    t.decimal "gpu_speed"
    t.decimal "gpu_memory"
    t.bigint "item_category_id"
    t.bigint "brand_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brand_id"], name: "index_items_on_brand_id"
    t.index ["item_category_id"], name: "index_items_on_item_category_id"
  end

  create_table "locations", force: :cascade do |t|
    t.text "name", null: false
    t.bigint "contact_id"
    t.bigint "company_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_locations_on_company_id"
    t.index ["contact_id"], name: "index_locations_on_contact_id"
  end

  create_table "networks", force: :cascade do |t|
    t.text "name"
    t.text "ipv4"
    t.text "v4_mask"
    t.text "v4_gateway"
    t.text "v4_dhcp_start"
    t.text "v4_dhcp_end"
    t.integer "vlan_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "people", force: :cascade do |t|
    t.text "first_name"
    t.text "last_name"
    t.boolean "active"
    t.bigint "department_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["department_id"], name: "index_people_on_department_id"
  end

  create_table "phones", force: :cascade do |t|
    t.text "number", null: false
    t.text "extension"
    t.text "notes"
    t.bigint "contact_type_id"
    t.bigint "contact_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["contact_id"], name: "index_phones_on_contact_id"
    t.index ["contact_type_id"], name: "index_phones_on_contact_type_id"
  end

  create_table "purchases", force: :cascade do |t|
    t.bigint "item_id"
    t.decimal "price", precision: 10, scale: 2
    t.decimal "shipping", precision: 10, scale: 2
    t.decimal "tax", precision: 10, scale: 2
    t.integer "qty"
    t.bigint "vendor_id", null: false
    t.text "notes"
    t.datetime "purchased_at"
    t.datetime "received_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_purchases_on_item_id"
    t.index ["vendor_id"], name: "index_purchases_on_vendor_id"
  end

  create_table "roles", force: :cascade do |t|
    t.text "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
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
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "person_id"
    t.string "refresh_secret"
    t.string "user_secret"
    t.boolean "active"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["person_id"], name: "index_users_on_person_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "vendors", force: :cascade do |t|
    t.text "name", null: false
    t.text "url"
    t.bigint "contact_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["contact_id"], name: "index_vendors_on_contact_id"
  end

  add_foreign_key "addresses", "contact_types"
  add_foreign_key "addresses", "contacts"
  add_foreign_key "contracts", "contract_types"
  add_foreign_key "contracts", "vendors"
  add_foreign_key "departments", "companies"
  add_foreign_key "emails", "contact_types"
  add_foreign_key "emails", "contacts"
  add_foreign_key "interfaces", "items"
  add_foreign_key "interfaces_ipv4s", "interfaces"
  add_foreign_key "interfaces_ipv4s", "ipv4_addresses"
  add_foreign_key "interfaces_ipv6s", "interfaces"
  add_foreign_key "interfaces_ipv6s", "ipv6_addresses"
  add_foreign_key "item_assignments", "departments"
  add_foreign_key "item_assignments", "items"
  add_foreign_key "item_assignments", "people"
  add_foreign_key "items", "brands"
  add_foreign_key "items", "item_categories"
  add_foreign_key "locations", "companies"
  add_foreign_key "locations", "contacts"
  add_foreign_key "people", "departments"
  add_foreign_key "phones", "contact_types"
  add_foreign_key "phones", "contacts"
  add_foreign_key "purchases", "items"
  add_foreign_key "purchases", "vendors"
  add_foreign_key "users", "people"
  add_foreign_key "vendors", "contacts"
end
