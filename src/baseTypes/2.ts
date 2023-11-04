// let anything = -20;
// anything = 'Text';
// anything = {};

let anything: any = -20;
anything = "Text";
anything = {};

let num: number;
if (typeof anything === "number") {
  num = anything;
}

export {};
