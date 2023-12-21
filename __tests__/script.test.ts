import { describe, test, expect, vi } from "vitest";
import { func1, func2, func3 } from "../script";

const getResults = async () => {
  const ids = [1, 2, 3, 4, 5];
  return await Promise.all(
    ids.map((id) =>
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
        res.json()
      )
    )
  );
};

describe("非同期処理の問題", () => {
  test("正しい値が取得できている", async () => {
    const json = await func1();
    const results = await getResults();
    expect(json).toMatchObject(results[0]);
  });
});

describe("非同期処理の問題 - 直列処理", () => {
  test("正しい順番で実行できている", async () => {
    const spy = vi
      .spyOn(global.console, "log")
      .mockImplementation((args) => args);
    await func2();
    const results = await getResults();
    for (const result of results) {
      expect(spy).toHaveReturnedWith(result);
    }
  });
});

describe("非同期処理の問題 - 並列処理", () => {
  test("正しい値が取得できている", async () => {
    const json = await func3();
    const results = await getResults();
    expect(json).toMatchObject(results);
  });
  test("Promise.allが使われている", async () => {
    const spy = vi.spyOn(Promise, "all");
    await func3();
    expect(spy).toHaveBeenCalled();
  });
});
