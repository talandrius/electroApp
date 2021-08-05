const { ipcMain, app } = require("electron")

//close button
closebtn.addEventListener('click', ()=>{
    ipcMain.quit()
})