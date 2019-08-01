class ShowReview < ApplicationRecord
  belongs_to :show
  belongs_to :review
end
