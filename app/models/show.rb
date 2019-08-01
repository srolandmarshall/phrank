class Show < ApplicationRecord
has_many :show_reviews
has_many :user_shows
has_many :reviews, :through => :show_reviews
has_many :users, :through => :user_shows

  def self.lookup_by_date(date)
    self.where(showdate: date).ids
  end

end
