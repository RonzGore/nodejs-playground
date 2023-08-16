// Demonstrate the performance improvement of keeping alive tcp connection during an api call



// prepare a collection of http calls to some remote service
const apiCalls = []
for (let index = 0; index < 100; index++) {
    apiCalls.push(await )
}

// make a call to this remote service parallely
(async() => {
    var startTime = process.hrtime()
    await Promise.allSettled(apiCalls)
    var elapsedSeconds = parseHrtimeToSeconds(process.hrtime(startTime));
    console.log('It takes ' + elapsedSeconds + 'seconds')
})()
