task :flush do
  exec 'rake db:drop && rake db:create && rake db:migrate && rake db:seed'
end
