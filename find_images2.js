const fs = require('fs');
fetch('https://croxx-fertilizer.de/').then(r => r.text()).then(html => {
  const matches = [...html.matchAll(/<img[^>]+src="images\/(24223-dd86b530\.png|814587-1ba67e8a\.png|5733207-0434a9c9\.png|1533130-4a6f6fd6\.png|CO2_Fussabdruck1\.png)"[^>]*>/g)];
  matches.forEach(m => console.log(html.substring(Math.max(0, m.index - 200), m.index + 200)));
})
