task :start do
  exec 'mysql.server start && foreman start -p 3000'
end
