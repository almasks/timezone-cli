const moment = require('moment-timezone')
moment.tz.setDefault('America/Los_Angeles')
let targetTimezone=""
if(process.argv.length !=3){
    console.log('usage :node <script file> <name>')
    process.exit(1)
}else{
  targetTimezone=process.argv[2]  
}
console.log(`the time zone in ${targetTimezone} is ${moment.tz(targetTimezone).format()}`)
