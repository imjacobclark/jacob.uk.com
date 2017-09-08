Rails.application.routes.draw do
  get 'page/index'

  namespace :admin do
    resources :pages
    resources :sections
  end

  get '*page', to: 'page#index'
  
  root 'page#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
