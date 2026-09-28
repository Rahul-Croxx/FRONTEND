fetch('https://croxx-fertilizer.de/').then(r => r.text()).then(html => console.log(html.match(/images\/[^"\'<>]+(?:\.png|\.svg|\.jpg|\.jpeg)/g)))
