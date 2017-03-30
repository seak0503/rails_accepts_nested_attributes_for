module ApplicationHelper
  def link_to_add_fields(name, f, association)
    new_object = f.object.send(association).new
    id = new_object.object_id
    fields = f.fields_for(association, new_object, child_index: id) do |builder|
      render("#{association.to_s.singularize}_fields", f: builder)
    end
    ### デバッグ
    Rails.logger.debug("idデバッグ: #{id}")
    Rails.logger.debug("fieldsデバッグ: #{fields}")
    Rails.logger.debug("fields.gsubデバッグ: #{fields.gsub("\n", "")}")
    ###
    link_to(name, '#', class: "add_fields", data: {id: id, fields: fields.gsub("\n", "")})
  end
end
