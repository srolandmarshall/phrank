class Review < ApplicationRecord
  belongs_to :show
  belongs_to :user

  def user
    User.find(self.user_id)
  end

  def self.mostrecent
    self.order('created_at DESC').limit(20)
  end

end
