class DepartmentsController < ApplicationController
  include Searchable
  include ContactableConcern

  expose :departments, -> { @active_company.departments.includes_associated }
  expose :department, -> { @active_company.departments.find_by_slug(params[:slug]) || Department.new(company_params) }

  # GET /departments
  def index
    self.departments = search(departments, sortable_fields)
    paginated_departments = departments.page(params[:page] || 1)

    render inertia: "Departments/Index", props: {
      departments: paginated_departments.render(view: :counts),
      pagination: -> { {
        count: departments.count,
        **pagination_data(paginated_departments)
      } }
    }
  end

  # GET /departments/:slug
  def show
    render inertia: "Departments/Show", props: {
      department:department.render(view: :show_page),
      items: -> {
        paginated_items = department.items.includes_associated.page(params[:page] || 1)
        {
          data: paginated_items.render(view: :associations),
          pagination: {
            count: department.items.size,
            **pagination_data(paginated_items)
          }
        }
      },
      accessories: InertiaRails.lazy(-> { 
        paginated_accessories = department.accessories.includes_associated.page(params[:page] || 1)
        {
          data: paginated_accessories.render(view: :associations),
          pagination: {
            count: department.accessories.size,
            **pagination_data(paginated_accessories)
          }
        }
      }),
      consumables: InertiaRails.lazy(-> { 
        paginated_consumables = department.consumables.includes_associated.page(params[:page] || 1)
        {
          data: paginated_consumables.render(view: :associations),
          pagination: {
            count: department.consumables.size,
            **pagination_data(paginated_consumables)
          }
        }
      }),
      components: InertiaRails.lazy(-> { 
        paginated_components = department.components.includes_associated.page(params[:page] || 1)
        {
          data: paginated_components.render(view: :associations),
          pagination: {
            count: department.components.size,
            **pagination_data(paginated_components)
          }
        }
      }),
      licenses: InertiaRails.lazy(-> { 
        paginated_licenses = department.licenses.includes_associated.page(params[:page] || 1)
        {
          data: paginated_licenses.render(view: :associations),
          pagination: {
            count: department.licenses.size,
            **pagination_data(paginated_licenses)
          }
        }
      }),
      people: InertiaRails.lazy(-> { 
        paginated_people = department.people.includes_associated.page(params[:page] || 1)
        {
          data: paginated_people.render(view: :associations),
          pagination: {
            count: department.people.size,
            **pagination_data(paginated_people)
          }
        }
      }),
    }
  end

  # GET /departments/new
  def new
    render inertia: "Departments/New", props: {
      department: Department.new.render(view: :new)
    }
  end

  # GET /departments/:slug/edit
  def edit
    render inertia: "Departments/Edit", props: {
      department: -> { department.render(view: :edit) }
    }
  end

  # POST /departments
  def create
    department.company = Company.find(params[:company_id])

    respond_to do |format|
      if department.save
        format.html { redirect_to company_url(department.company), notice: 'Department was successfully created.' }
        format.json { render :show, status: :created, location: department }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: department.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /departments/:slug
  def update
    respond_to do |format|
      if department.update(department_params)
        format.html { redirect_to company_url(department.company), notice: 'Department was successfully updated.' }
        format.json { render :show, status: :ok, location: department }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: department.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /departments/:slug
  def destroy
    department.destroy
    respond_to do |format|
      format.html { redirect_to company_url(department.company), notice: 'Department was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def sortable_fields
    %w(name assets.count people.count).freeze
  end

  def department_params
    params.require(:department).permit(:name, :location_id)
  end
end
