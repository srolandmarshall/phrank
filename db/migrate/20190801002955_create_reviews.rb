class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :show_id
      t.integer :user_id
      t.text :content
      t.decimal :rating

      t.timestamps
    end
  end
end
