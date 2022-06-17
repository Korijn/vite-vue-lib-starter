import { createRenderer } from '@vue/runtime-core'

import * as THREE from 'three';

const patchProp = (
    el,
    key,
    prevValue,
    nextValue,
    // the rest is unused for most custom renderers
    // isSVG?: boolean,
    // prevChildren?: VNode<HostNode, HostElement>[],
    // parentComponent?: ComponentInternalInstance | null,
    // parentSuspense?: SuspenseBoundary | null,
    // unmountChildren?: UnmountChildrenFn
  ) => {
    console.log("patchProp");
};

const insert = (
    el,
    parent,
    anchor,
  ) => {
    console.log("insert");
};

const remove = (el) => {
    console.log("remove");
};

const createElement = (
    type,
    // isSVG,
    // isCustomizedBuiltIn,
    // vnodeProps
  ) => {
    console.log("createElement");
    return {};
}

const createText = (text) => {
    console.log("createText");
    return {};
};

const createComment = (text) => {
    console.log("createComment");
    return {};
};

const setText = (node, text) => {
    console.log("setText");
};

const setElementText = (node, text) => {
    console.log("setElementText");
};

const parentNode = (node) => {
    console.log("parentNode");
    return {};
};

const nextSibling = (node) => {
    console.log("nextSibling");
    return {};
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
