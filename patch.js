(
    function b() {
        //for android
        let shell = require('shelljs');

        //mac
        shell.rm('-rf', './node_modules/recoil/native/recoil.js');
        shell.cp('-r', './patches/recoil.js', './node_modules/recoil/native/recoil.js');

        //window
    }
)();

