# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    # Allow super_admin full control
    user ||= User.new # guest user (not logged in)
    if user.has_role? :super_admin
      can :manage, :all
    else
      can :manage, Company, id: Company.with_role(:admin, user).pluck(:id)
    end

    # The first argument to `can` is the action you are giving the user permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on.
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the
    # objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, :published => true
    #
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities

    # Specify specific actions for models:
    # can [:update, :destroy], [Company, Location]

    # Create custom action:
    # alias_action :create, :read, :update, :destroy, to: :crud

    # Use controller method as symbol:
    # can :invite, User

    # Pass a hash of conditions based on db columns: 
    # (this restricts user to only read active projects which they own where the category it belongs to is visible)
    # can :read, Project, active: true, user_id: user.id, category: { visible: true }
  end
end
