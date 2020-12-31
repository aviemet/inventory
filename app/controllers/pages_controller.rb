class PagesController < ApplicationController

  def home
    render template: "pages/home"
  end

  def show
    if valid_page?
      @categories = Category.all
      render template: "pages/#{params[:page]}"
    else
      render file: "public/404.html", status: :not_found
    end
  end

  private

  def valid_page?
    File.exist?(Pathname.new(Rails.root + "app/views/pages/#{params[:page]}.html.slim"))
  end
end
