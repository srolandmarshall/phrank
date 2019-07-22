require 'csv'

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
end

puts "There are now #{Show.count} rows in the transactions table"
