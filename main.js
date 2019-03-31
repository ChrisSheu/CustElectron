const {
    app,
    BrowserWindow,
    ipcMain,
} = require('electron')

const path = require('path')
const url = require('url')

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    // darwin = MacOS
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        maximizable: true
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open DevTools.
    win.webContents.openDevTools()

    // When Window Close.
    win.on('closed', () => {
        win = null
    })

}

ipcMain.on('get_message', function(event, arg) {
    console.log("get msg");
    event.sender.send('ret get_message', "rrreturn custom");
});