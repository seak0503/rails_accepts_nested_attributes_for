3.times.each do |i|
  Event.create!(
    name: "Event Name #{i}"
  )
end