require 'csv'
require 'faker'

def seedShows
  csv_text = File.read(Rails.root.join('lib', 'seeds', 'phish_setlists_parsed.csv'))
  csv = CSV.parse(csv_text, :headers => true)
  csv.each do |row|
    t = Show.new
    t.link = row['link']
    t.location = row['location']
    t.notes = row['notes']
    t.showdate = row['showdate']
    t.show_id = row['show_id']
    t.tour_when = row['tour_when']
    t.tour_id = row['tour_id']
    t.tour_name = row['tour_name']
    t.venue = row['venue']
    t.venue_id = row['venue_id']
    t.rating = row['rating']
    t.setlist = row['setlist']
    t.songs = row['songs']
    t.sets = row['sets']
    t.save
  end
  puts "There are now #{Show.count} rows in the Shows table"
end

def seedUsers
  100.times do
    email = Faker::Internet.email
    User.create(
      username: email,
      email: email,
      password: "123456"
    )
  end
  puts "There are now #{User.count} rows in the Users table"
end

def seedUserShows
  400.times do
    UserShow.create(
      user_id: rand(User.first.id..User.last.id),
      show_id: rand(Show.first.id..Show.last.id)
    )
  end
  puts "User+Show relations created: #{UserShow.count}"
end

def seedReviews
  400.times do
    user_id = rand(User.first.id..User.last.id)
    show_id = User.find(user_id).shows.ids.sample
    Review.create(
      user_id: user_id,
      show_id: show_id,
      content: Faker::Lorem.paragraph,
      rating: rand(1.0..5.0)
    )
  end
  puts "Reviews created: #{Review.count}"
end

seedUsers
seedUserShows
seedReviews
