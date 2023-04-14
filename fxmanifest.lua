fx_version "cerulean"
game "gta5"

client_scripts {
    'client.lua',
    'dist/client.js'
}
server_script 'dist/server.js'

ui_page 'web/dist/index.html'

files {
    'web/dist/index.html',
    'web/dist/*.js',
    'web/dist/racing-app-icon.png'
}
