let process = require('process')
let os = require('os')

let osProperties = [
    os.cpus(),
    os.hostname(),
    os.platform()
]

// Hämta ut en array av argument från kommandoraden, inkl node.
let argument = process.argv

let funktion = osProperties[argument[2] - 1]

console.log(funktion)