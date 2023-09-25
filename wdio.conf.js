export const config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
       
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['incognito']
        }
    }],

    logLevel: 'info',

    bail: 0,
   
    baseUrl: 'http://localhost',
 
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,

    services: ['chromedriver'],
    
    framework: 'mocha',
    
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
