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

ActiveRecord::Schema.define(version: 2019_08_01_003418) do

  create_table "reviews", force: :cascade do |t|
    t.integer "show_id"
    t.integer "user_id"
    t.text "content"
    t.decimal "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "show_reviews", force: :cascade do |t|
    t.integer "show_id"
    t.integer "review_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_show_reviews_on_review_id"
    t.index ["show_id"], name: "index_show_reviews_on_show_id"
  end

  create_table "shows", force: :cascade do |t|
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
    t.decimal "rating"
    t.decimal "user_rating"
    t.integer "user_rank"
    t.text "setlist"
    t.string "songs"
    t.string "sets"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_reviews", force: :cascade do |t|
    t.integer "user_id"
    t.integer "review_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_user_reviews_on_review_id"
    t.index ["user_id"], name: "index_user_reviews_on_user_id"
  end

  create_table "user_shows", force: :cascade do |t|
    t.integer "user_id"
    t.integer "show_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["show_id"], name: "index_user_shows_on_show_id"
    t.index ["user_id"], name: "index_user_shows_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "state"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
