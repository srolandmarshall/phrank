Rails.application.routes.draw do

namespace :api do
  resources :shows do
    resources :reviews
    resources :users
  end
  resources :users do
    resources :reviews
    resources :shows
  end
  resources :reviews
  resources :user_shows, only: [:create, :destroy]
end

end
