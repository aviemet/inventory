# frozen_string_literal: true

class ModalComponent < ViewComponent::Base
  def initialize(heading:)
    @heading = heading
    @modal_id = SecureRandom.hex
  end
end
