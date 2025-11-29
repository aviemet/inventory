Rails.application.config.to_prepare do
  lib_path = Rails.root.join("lib").to_s
  autoload_paths = Rails.application.config.autoload_paths.to_a
  eager_load_paths = Rails.application.config.eager_load_paths.to_a

  unless autoload_paths.include?(lib_path)
    Rails.application.config.autoload_paths = autoload_paths + [lib_path]
  end

  unless eager_load_paths.include?(lib_path)
    Rails.application.config.eager_load_paths = eager_load_paths + [lib_path]
  end
end
