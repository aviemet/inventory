class ApplicationPolicy
  attr_reader :user, :record

  class Scope
    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      raise NotImplementedError, "You must define #resolve in #{self.class}"
    end

    private

    attr_reader :user, :scope
  end

  def initialize(user, record)
    @user = user
    @record = record
  end

  def index?
    standard_authorized?(:index)
  end

  def show?
    standard_authorized?(:show)
  end

  def create?
    standard_authorized?(:create)
  end

  def new?
    create?
  end

  def update?
    standard_authorized?(:update)
  end

  def edit?
    update?
  end

  def destroy?
    standard_authorized?(:destroy)
  end

  private

  def standard_authorized?(action)
    return true if user.has_role?(:super_admin)

    return false unless user.person

    person = user.person
    return false unless person.company

    admin_role = person.company.roles.find_by(name: :admin)
    return true if admin_role && person.roles.include?(admin_role)

    resource_class = record_class
    return false unless resource_class

    person.has_role_with_groups?(action, resource_class)
  end

  def record_class
    if record.is_a?(Class)
      record
    elsif record.respond_to?(:class)
      record.class
    end
  end
end
