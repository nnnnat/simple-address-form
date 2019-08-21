import hw from "./hw";

const result = "Hello World!";

test(`hw (hello world) function should return "${result}"`, () => {
  const spec = hw();
  expect(spec).toBe(result);
});
