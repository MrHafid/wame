const qrcode = require('qrcode-terminal');
const fs = require("fs");

// function showqr() {
    fs.readFile("./components/last.qr", "utf8", (err, last_qr) => {
        // console.log(last_qr);
    if (!err && last_qr) {
        qrcode.generate(last_qr, {small: true});
    }
  });
// }
