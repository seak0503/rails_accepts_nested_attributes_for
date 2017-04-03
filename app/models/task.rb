class Task < ActiveRecord::Base
  attr_accessor :select_title

  belongs_to :user

  TITLES = %w(勉強 食事 仕事 睡眠 休憩)
end
