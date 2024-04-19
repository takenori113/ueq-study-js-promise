// 非同期処理
export const func1 = async () => {
  const url = `https://jsonplaceholder.typicode.com/todos/1`;
  const res = await fetch(url);
  return res.json(url);
}

// 直列で非同期処理
export const func2 = async () => {
  const ids = [1, 2, 3, 4, 5];

  const fetchUrlTojson = async (url) => {
    const res = await fetch(url);
    console.log(res.json());
  };

  for (const id of ids) {
    await fetchUrlTojson(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }


}
// 並列で非同期処理
export const func3 = async() => {
  const ids = [1, 2, 3, 4, 5];
  const jsons = await Promise.all(
     ids.map((id) =>  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => res.json()))
  );
  return  jsons;
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
