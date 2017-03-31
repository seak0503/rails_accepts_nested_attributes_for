class Task < ActiveRecord::Base
  belongs_to :user

  TITLES = %w(勉強 食事 仕事 睡眠 休憩)
end
