Rails.application.routes.draw do
  root 'home#index'

  resources :mixes, only: [:index, :show]
end
