class User < ApplicationRecord
  has_many :user_reviews
  has_many :user_shows
  has_many :reviews, :through => :user_reviews
  has_many :shows, :through => :user_shows
end
