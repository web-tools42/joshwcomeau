# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20140421174454) do

  create_table "dummyrestaurants", force: true do |t|
    t.string   "name"
    t.text     "description"
    t.text     "display_image_url"
    t.string   "location"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "cuisine"
    t.string   "address"
  end

  create_table "reservations", force: true do |t|
    t.integer  "restaurant_id"
    t.integer  "user_id"
    t.datetime "start_time"
    t.integer  "seats"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "restaurants", force: true do |t|
    t.string   "name"
    t.integer  "capacity"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "description"
    t.string   "display_image_url"
    t.string   "location"
    t.string   "cuisine"
    t.string   "address"
    t.float    "rating"
    t.time     "opening_hour"
    t.time     "closing_hour"
    t.integer  "reservation_length_minutes"
    t.integer  "user_id"
  end

  create_table "reviews", force: true do |t|
    t.integer  "restaurant_id"
    t.integer  "user_id"
    t.string   "title"
    t.text     "content"
    t.integer  "rating"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "password_digest"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "active_status"
    t.string   "user_type"
    t.string   "email"
  end

end
