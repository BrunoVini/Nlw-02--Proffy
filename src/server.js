// Server
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// configure nunjucks (template engines)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Configure start and end
server
// receber os dados do req.body 
.use(express.urlencoded({ extended: true }))
// configure file static (css, script, images)
.use(express.static("public"))
// way of aplication
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5000)
// console.log(__dirname)