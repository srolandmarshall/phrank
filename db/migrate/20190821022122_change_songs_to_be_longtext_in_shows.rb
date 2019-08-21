class ChangeSongsToBeLongtextInShows < ActiveRecord::Migration[5.2]
  def change
    change_column :shows, :songs, :longtext
  end
end
