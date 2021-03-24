class ApplicationDecorator < Draper::Decorator
  def self.collection_decorator_class
    View::PaginationDecorator
  end
end
