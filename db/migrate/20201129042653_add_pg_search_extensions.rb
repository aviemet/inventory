class AddPgSearchExtensions < ActiveRecord::Migration[6.0]
  def change
    execute "create extension pg_trgm;"
    execute "create extension unaccent;"
    execute "create extension fuzzystrmatch;"
  end
end
