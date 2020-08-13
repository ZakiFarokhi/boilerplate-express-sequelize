const env = {
    database: 'itasset-v2',
    username: 'farokhi',
    password: 'Farokhi96',
    host: 'localhost',
    dialect: 'mssql', //Microsoft SQL Server
    pool: {
        max: 5,
        min:0,
        acquire:30000,
        idle:10000
    },
}

module.exports = env