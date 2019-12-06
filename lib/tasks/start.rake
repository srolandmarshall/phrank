task :start do
  exec 'sudo chown -R _mysql:mysql /usr/local/var/mysql && sudo mysql.server start && foreman start -p 3000'
end
