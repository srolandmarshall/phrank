class CreateShows < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :link
      t.string :location
      t.string :notes
      t.string :showdate
      t.integer :show_id
      t.string :tour_when
      t.integer :tour_id
      t.string :tour_name
      t.string :venue
      t.integer :venue_id
      t.decimal :rating
      t.decimal :user_rating
      t.integer :user_rank
      t.text :setlist
      t.string :songs
      t.string :sets

      t.timestamps
    end
  end
end
