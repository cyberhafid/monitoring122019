module.exports = {
        getCpuInfo: function () {
                const os = require('os');
                const load = os.loadavg();
                const cpu = {
                        load1: load[0],
                        load5: load[1],
                        load15: load[2],
                        cores: os.cpus().length,
                      
                };
                cpu.utilization = Math.min(Math.floor(load[0] * 100 / cpu.cores), 100);
                          return (cpu);
        },
        getSystemInfo: function () {
                const os = require('os');
                return {
                 osPlatform: process.platform,
                 osRelease: os.type() + ' ' + os.release(),
                 architecture: os.arch(),
                 load: os.loadavg(),
     memory: {
      free: os.freemem(),
      total: os.totalmem()
     },
               //  systemArchitecture: config.OS_SYSARCH,
                // totalMemoryMB: roundPow2(os.totalmem() / (1 << 20)),
                 numCores: os.cpus().length
                }
}
}