# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_13_030252) do

  create_table "reviews", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "show_id"
    t.integer "user_id"
    t.text "content"
    t.decimal "rating", precision: 10
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "show_reviews", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "show_id"
    t.bigint "review_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["review_id"], name: "index_show_reviews_on_review_id"
    t.index ["show_id"], name: "index_show_reviews_on_show_id"
  end

  create_table "shows", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "link"
    t.string "location"
    t.string "notes"
    t.string "showdate"
    t.integer "show_id"
    t.string "tour_when"
    t.integer "tour_id"
    t.string "tour_name"
    t.string "venue"
    t.integer "venue_id"
    t.decimal "rating", precision: 10
    t.decimal "user_rating", precision: 10
    t.integer "user_rank"
    t.text "setlist"
    t.string "songs"
    t.string "sets"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "user_shows", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "show_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["show_id"], name: "index_user_shows_on_show_id"
    t.index ["user_id"], name: "index_user_shows_on_user_id"
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "username"
    t.string "state"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "access_token"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "show_reviews", "reviews"
  add_foreign_key "show_reviews", "shows"
  add_foreign_key "user_shows", "shows"
  add_foreign_key "user_shows", "users"
end
