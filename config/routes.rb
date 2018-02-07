Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :show, :destroy]
    resources :restaurants, only: [:show, :index]
    resources :reservations, only: [:create, :show, :index, :update, :delete]
    resources :search, only: [:index]
    resources :reviews, only: [:create, :show, :index, :update, :delete]
  end
  root to: 'root#root'
end
