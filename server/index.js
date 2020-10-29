const fs = require('fs');
const path = require('path');
const PNG = require('pngjs').PNG;
const pm = require('pixelmatch');

const imageA = PNG.sync.read(
    fs.readFileSync(
        path.join(__dirname, '../assets/2a.png')
    )
);

const imageB = PNG.sync.read(
    fs.readFileSync(
        path.join(__dirname, '../assets/2b.png')
    )
);

const {
    width,
    height
} = imageA;

const diff = new PNG({
    width,
    height
});

pm(imageA.data, imageB.data, diff.data, width, height, {
    threshold: 0.1
});

fs.writeFileSync(
    path.join(__dirname, '../assets/diff.a-b.png'),
    PNG.sync.write(diff)
);