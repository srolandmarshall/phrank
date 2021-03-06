class Show < ApplicationRecord
has_many :user_shows
has_many :reviews
has_many :users, :through => :user_shows

  def self.lookup_by_date(date)
    self.where(showdate: date).ids
  end

  def self.get_reviews(shows)
    reviews = shows.map {|show|
      show.reviews if !show.reviews.empty?
    }
    reviews.reject{ |r| r.nil? }.as_json(include: {
      user: {  only: [:id, :username, :email]}
    })
  end

  def self.mostrecent
    reviews = Review.mostrecent
    shows = []
    reviews.each do |review|
      shows << Show.find(review.show_id)
    end
    return shows
  end

end
