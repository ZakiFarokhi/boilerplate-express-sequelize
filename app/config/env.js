const env = {
    database: 'ITAsset',
    username: 'zaki',
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