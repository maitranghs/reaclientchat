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
    function join(chatroom, cb) {
        socket.emit('join', chatroom, cb)
    }
    function leave(chatroom, cb) {
        socket.emit('leave', chatroom, cb)
    }
    function message(chatroom, message, cb) {
        socket.emit('message', chatroom, message, cb)
    }
    function getAvailableUsers(cb) {
        socket.on('getAvailableUsers', cb)
    }

    return {
        register,
        join,
        leave,
        message,
        getAvailableUsers,
        socket
    }
}