Rails.application.routes.draw do

namespace :api do
  resources :shows do
    resources :reviews
  end
  resources :users do
    resources :reviews
  end
  resources :reviews
end

end
