class Show < ApplicationRecord
has_many :reviews
has_many :users

  def self.lookup_by_date(date)
    self.where(showdate: date).ids
  end

end
