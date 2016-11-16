const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const express = require('express')
const server = express()

let win

function createWindow() {
  
  server.use('/', express.static('./'));
  server.listen(8080);

  win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadURL(url.format({
    pathname: 'localhost:8080/electron.html',
    protocol: 'http:',
    slashes: true
  }))

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})