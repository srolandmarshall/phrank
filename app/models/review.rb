class Review < ApplicationRecord
  belongs_to :show
  belongs_to :user

  def user
    User.find(self.user_id)
  end
end
