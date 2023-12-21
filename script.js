// 非同期処理
export const func1 = () => {
  return {};
};

// 直列で非同期処理
export const func2 = () => {};

// 並列で非同期処理
export const func3 = () => {
  return [];
};

const main = () => {
  // func1の実行例
  const result1 = func1();
  console.log(result1);
  // func2の実行例
  func2();
  // func3の実行例
  const result3 = func3();
  console.log(result3);
};

main();
