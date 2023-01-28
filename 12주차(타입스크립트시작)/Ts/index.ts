function f1(a = "abc", b = 10) {
  return a.length + b;
}
f1(3, 6);
const v1: string = f1("a", 1);

function f2(value: number) {
  if (value < 10) {
    return value;
  } else {
    return "too big";
  }
}

const v2: number = f2(5);
const v3: string = f2(35);
const v4 = f2(5);
