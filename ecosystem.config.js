let watch = false
let instances = 1
let exec_mode = 'fork'

module.exports = {
    apps: [
        {
            name: 'web-gtc',
            cwd: '/root/app/gtc',
            script: './server.js',
            exp_backoff_restart_delay: 100,
            instances,
            exec_mode,
            watch,
            max_memory_restart: '1G',
            autorestart: true,
            env: {
                NAMESPACE: 'web-gtc',
                NODE_ENV: 'development',
                SESSION_SECRET: 'secretgtc',
                DEBUG: 'gtc:*,services:*',
                PORT: 3000
            },
             env_production: {
                 NAMESPACE: 'web-gtc',
                 NODE_ENV: 'production',
                 DEBUG: 'gtc:*,services:*',
                 PORT: 3000
            }
        }
    ]
}
