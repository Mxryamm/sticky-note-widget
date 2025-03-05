const { app, BrowserWindow } = require("electron");

let win;

app.whenReady().then(() => {
    win = new BrowserWindow({
        width: 300,
        height: 350,
        resizable: true, // Allows resizing
        alwaysOnTop: true,
        frame: false, // No default window frame
        transparent: true, // Enables transparency
        hasShadow: true, // Adds smooth shadow
        roundedCorners: true, // Ensures smooth rounded corners
        webPreferences: {
            nodeIntegration: true
        }
    });
    
    

    win.loadFile("index.html");

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
