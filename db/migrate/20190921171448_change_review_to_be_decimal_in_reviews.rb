class ChangeReviewToBeDecimalInReviews < ActiveRecord::Migration[5.2]
  def change
    change_column :reviews, :rating, :decimal
  end
end
