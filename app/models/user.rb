class User < ActiveRecord::Base
  attr_accessor :select_title
  TITLES = %w(勉強 食事 仕事 睡眠 休憩)

  has_many :addresses
  accepts_nested_attributes_for :addresses, allow_destroy: true, reject_if: :all_blank
  has_many :tasks
  accepts_nested_attributes_for :tasks

  validates :username, presence: true
  validates :age, presence: true
end
