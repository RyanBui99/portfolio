'use strict'
const http = require('http')
const host = 'localhost'
const port = 8000

const requestListener = (req, res) => {
  res.writeHead(200)
  res.end('My server!')
}

const server = http.createServer(requestListener)
server.listen(port, host, () => {
  console.log(`Server is running succesfully on http://${host}:${port}`)
})
