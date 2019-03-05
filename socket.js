require('./config/config.js')

export default function () {
    const endpoint = `${config.server.host}:${config.server.port}`
    const socket = io.connect(endpoint)

    // listen when having new users
    socket.on('usersChanged', () => {
        socket.emit('usersChanged')
    })

    socket.on('error', (err) => {
        console.log(`[${new Date()}][Socket Error]: ${err.message}`)
    })

    function register(fullname, username, password, cb) {
        socket.emit('register', fullname, username, password, cb)
    }
    function message(fromId, toId, message, cb) {
        socket.emit('message', fromId, toId, message, cb)
    }
    function getAvailableUsers(cb) {
        socket.on('getAvailableUsers', cb)
    }
    function getNewestMessage(cb) {
        socket.on('newMessage', cb)
    }
    function getHistory(fromId, toId, cb) {
        socket.emit('getHistory', fromId, toId, cb)
    }

    return {
        socket,
        register,
        message,
        getAvailableUsers,
        getHistory,
        getNewestMessage
    }
}