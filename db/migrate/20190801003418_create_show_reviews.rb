class CreateShowReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :show_reviews do |t|
      t.references :show, foreign_key: true
      t.references :review, foreign_key: true

      t.timestamps
    end
  end
end
