# frozen_string_literal: true

class Modal::ModalComponent < ApplicationComponent
  def initialize(heading:)
    @heading = heading
    @modal_id = SecureRandom.hex
  end
end
