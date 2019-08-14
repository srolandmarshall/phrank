Rails.application.routes.draw do

devise_for :users, only: []
root to: "home#index"

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

resource :login, only: [:create], controller: :sessions

end
