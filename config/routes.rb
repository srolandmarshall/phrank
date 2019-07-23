Rails.application.routes.draw do

  resources :shows
  match '/:showdate', to: 'shows#by_showdate', via: 'get'
end
