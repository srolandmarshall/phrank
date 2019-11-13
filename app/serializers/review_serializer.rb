class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :show_id, :user_id, :created_at, :user, :content
  def user
    object.user
  end
end
