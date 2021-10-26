const app = require('./app')

require('dotenv').config()

require('./database')

const main = async() => {
    await app.listen(app.set('port'))
    console.log('server on port', app.set('port'))
}

main()