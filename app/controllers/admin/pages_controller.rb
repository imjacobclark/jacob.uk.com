class Admin::PagesController < ApplicationController
  def new
  end

  def index
    @pages = Page.all
  end

  def edit    
    @page = Page.find(params[:id])
  end

  def update 
    @page = Page.find(params[:id])
    
     if @page.update(page_params)
       redirect_to '/' + @page.slug
     else
       render 'edit'
     end
  end

  private
    def page_params
      params.require(:page).permit(:slug, :title)
    end
    
    layout "admin"
end

