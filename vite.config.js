import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import os from 'node:os'

// Find this computer's Wi-Fi / LAN address (e.g. 192.168.1.5) so QR codes
// generated during local testing can be opened from a phone on the same Wi-Fi.
function getLanIp() {
  const nets = os.networkInterfaces()
  const candidates = []
  for (const [name, list] of Object.entries(nets)) {
    for (const net of list || []) {
      if (net.family !== 'IPv4' || net.internal) continue
      // skip virtual adapters (VirtualBox, WSL, Hyper-V, Docker, VPN)
      if (/virtual|vbox|vmware|wsl|hyper-v|vethernet|docker|tailscale|zerotier/i.test(name)) continue
      candidates.push(net.address)
    }
  }
  return candidates.find((ip) => /^192\.168\./.test(ip))
    || candidates.find((ip) => /^10\./.test(ip))
    || candidates.find((ip) => /^172\.(1[6-9]|2\d|3[01])\./.test(ip))
    || candidates[0]
    || ''
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // also serve on the Wi-Fi address, so phones can open the site
  },
  preview: {
    host: true,
  },
  define: {
    __LAN_IP__: JSON.stringify(getLanIp()),
  },
})
