/*
Show
-- UID
-- Date
-- Location
-- Venue
-- Rating
-- Setlist
-- Songs
-- Sets

*/

let show = {
  id: 1,
  date: new Date(),
  location: "Test Location",
  venue: "Venue",
  rating: 2.5,
  setlist: `<p><span class='set-label'>Set 1</span>: <a href='http://phish.net/song/long-cool-woman-in-a-black-dress' class='setlist-song'>Long Cool Woman in a Black Dress</a><sup title="Phish debut.">[1]</sup>, <a href='http://phish.net/song/proud-mary' class='setlist-song'>Proud Mary</a><sup title='Phish debut.' title='Phish debut.'>[1]</sup>, <a href='http://phish.net/song/in-the-midnight-hour' class='setlist-song'>In the Midnight Hour</a><sup title='Phish debut.' title='Phish debut.'>[1]</sup>, <a href='http://phish.net/song/squeeze-box' class='setlist-song'>Squeeze Box</a><sup title='Phish debut.' title='Phish debut.'>[1]</sup>, <a href='http://phish.net/song/roadhouse-blues' class='setlist-song'>Roadhouse Blues</a><sup title='Phish debut.' title='Phish debut.'>[1]</sup>, <a href='http://phish.net/song/happy-birthday-to-you' class='setlist-song'>Happy Birthday to You</a><sup title='Phish debut.' title='Phish debut.'>[1]</sup></p><p><span class='set-label'>Set 2</span>: <a href='http://phish.net/song/scarlet-begonias' class='setlist-song'>Scarlet Begonias</a><sup title='Phish debut.' title='Phish debut.'>[1]</sup> > <a href='http://phish.net/song/fire-on-the-mountain' class='setlist-song'>Fire on the Mountain</a><sup title='Phish debut.' title='Phish debut.'>[1]</sup><p class='setlist-footer'>[1] Phish debut.<br></p>`,
  songs: ['Long Cool Woman in a Black Dress', 'Proud Mary', 'In the Midnight Hour', 'Squeeze Box', 'Roadhouse Blues', 'Happy Birthday to You', 'Scarlet Begonias', 'Fire on the Mountain'],
  sets: ['Set 1', 'Set 2']
}
