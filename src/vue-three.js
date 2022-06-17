import { createRenderer, watch, watchEffect, toRaw, toRef } from '@vue/runtime-core'

import * as THREE from 'three';


const setObjValues = (obj, nextValue) => {
    if (nextValue instanceof Object) {
        Object.entries(nextValue).forEach(([key, value]) => {
           obj[key] = value
        })
    }
};

const patchProp = (el, key, prevValue, nextValue) => {
    console.debug("patchProp", el, key, prevValue, nextValue);
    if (key == "rotation") {
        setObjValues(el[key], nextValue);
    } else {
        el[key] = nextValue;
    }
};

const insert = (el, parent, anchor) => {
    console.debug("insert", el, parent, anchor);
    if (anchor) {
        console.warn("anchor is not supported");
    }
    parent.add(el);
};

const remove = (el) => {
    console.debug("remove", el);
    el.removeFromParent();
};

const TYPEMAP = {};
const createElement = (type) => {
    console.debug("createElement", type);
    const typeLower = type.toLowerCase();
    let constructor = TYPEMAP[typeLower];
    if (constructor === undefined) {
        const matchedKey = Object.keys(THREE).find(key => key.toLowerCase() === typeLower);
        if (matchedKey === undefined) {
            throw new TypeError(`${type} not found in THREE namespaces`);
        }
        TYPEMAP[typeLower] = constructor = THREE[matchedKey];
    }
    const el = new constructor();
    console.debug(`created ${el}`);
    return el;
}

const createText = (text) => {
    console.debug("createText", text);
    throw new TypeError(`createText is not supported by @korijn/vue-three`);
};

const createComment = (text) => {
    console.debug("createComment", text);
    throw new TypeError(`createComment is not supported by @korijn/vue-three`);
};

const setText = (node, text) => {
    console.debug("setText", node, text);
    throw new TypeError(`setText is not supported by @korijn/vue-three`);
};

const setElementText = (node, text) => {
    console.debug("setElementText", node, text);
    throw new TypeError(`setElementText is not supported by @korijn/vue-three`);
};

const parentNode = (node) => {
    console.debug("parentNode", node);
    return node.parent;
};

const nextSibling = (node) => {
    console.debug("nextSibling", node);
    throw new TypeError(`nextSibling is not supported by @korijn/vue-three`);
};

const { render, createApp } = createRenderer({
  patchProp,
  insert,
  remove,
  createElement,
  createText,
  createComment,
  setText,
  setElementText,
  parentNode,
  nextSibling,
})

// `render` is the low-level API
// `createApp` returns an app instance
export { render, createApp }

// re-export Vue core APIs
export * from '@vue/runtime-core'
