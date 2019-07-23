class Show < ApplicationRecord

  def self.lookup_by_date(date)
    self.where(showdate: date).ids
  end

end
