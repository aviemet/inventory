# frozen_string_literal: true

class Forms::DropdownMenu::DropdownMenuComponent < ApplicationComponent
  renders_one :heading
  renders_many :options, "ListOptionComponent"

  class ListOptionComponent < ApplicationComponent
    def initialize(classes: "")
      @classes = classes
    end

    def call
      content_tag :li, content, { class: @classes }
    end
  end
end
