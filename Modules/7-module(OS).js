//OS module
const os = require('os')
//info about current user
const user =os.userInfo()
console.log(user)
//method return the system uptime in seconds
const uptime = os.uptime()
console.log(uptime)
const currentOS={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentOS)
