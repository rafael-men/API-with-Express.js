const schedule = require('node-schedule')

const tar1 = schedule.scheduleJob('*5/ * 13 * * 2' , () => {
    console.info('Executando tarefa 1', new Date().getSeconds())
})

setTimeout(() => {
    tar1.cancel()
    console.log('cancelando tarefa1')
} , 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]

//set interval
regra.hour = 17
regra.minute = 20

const tar2 = schedule.scheduleJob(regra, () => {
    console.log('executando tarefa2', new Date().getSeconds())
})