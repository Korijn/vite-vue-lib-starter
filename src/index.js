import { hello } from "./vue-three";

const VueThreePlugin = {
    install: (app, options) => {
        console.log(hello());
    },
};


export {
    VueThreePlugin,
    hello,
};
