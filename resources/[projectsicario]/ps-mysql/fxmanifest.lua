fx_version "cerulean"
version '1.0.0'
description "ps-mysql"

lua54 'yes'

games {
  "gta5",
  "rdr3"
}

-- ui_page 'build/index.html'

client_script {
  "client/**/*"
}
server_script {
  "server/**/*"
}

-- files {
--   'build/index.html',
--   'build/**/*'
-- }

rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'