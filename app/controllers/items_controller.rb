class ItemsController < ApplicationController

	def index
		load_items
	end

	def show
		load_item
	end

	def new
		build_item
		build_associated_resources
	end

	def create
		build_item
		save_item or render 'new'
	end

	def edit
		load_item
		build_item
	end

	def update
		load_item
		build_item
		save_item or render 'edit'
	end

	def destroy
		load_item
		@item.destroy
		redirect_to items_path
	end

	private

	allowed_params = :title, :model, :serial, :description, :notes, :category_id, :brand_id, :consumeable, :qty, :os, :memory, :storage, :cpu, :cpu_speed, :gpu, :gpu_speed, :gpu_memory

	def load_items
		@items ||= item_scope.to_a
	end

	def load_item
		@item ||= item_scope.find(params[:id])
	end	

	def build_item
		@item ||= item_scope.build
		@item.attributes = item_params
	end

	def build_associated_resources
		@item_categories ||= ItemCategory.all
	end

	def save_item
		if @item.save
			redirect_to @item
		end
	end

	def item_params
		item_params = params[:item]	
		item_params ? item_params.permit(allowed_params) : {}
	end

	def item_scope
		Item.all.all
	end
end
