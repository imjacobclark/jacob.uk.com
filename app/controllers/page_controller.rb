class PageController < ApplicationController
  def index
    @slug = slug
    @title = Page.title(@slug)    
    @pages = Page.all

    if @title.nil?
      return render '404', :status => '404'
    end

    @sections = Page.sections(@slug)
  end

  private 
    def is_index_page 
      return params[:page].nil?
    end

    def slug
      if is_index_page
        return 'homepage'
      else
        return params[:page]
      end
    end
end
