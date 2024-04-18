// 非同期処理
export const func1 = () => {
  const url = `https://jsonplaceholder.typicode.com/todos/1`
  return fetch(url).then((res) => {
    return res.json();
  })
};

// 直列で非同期処理
export const func2 = () => {const url = `https://jsonplaceholder.typicode.com/todos/1`;
const url2 = `https://jsonplaceholder.typicode.com/todos/2`;
const url3 = `https://jsonplaceholder.typicode.com/todos/3`;
const url4 = `https://jsonplaceholder.typicode.com/todos/4`;
const url5 = `https://jsonplaceholder.typicode.com/todos/5`;

fetch(url)
  .then(res => res.json())  // 最初のリクエストのレスポンスをJSONに変換
  .then(data => {
    console.log(data);       // データを出力
    return fetch(url2);      // 次のURLへのリクエスト
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    return fetch(url3);
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    return fetch(url4);
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    return fetch(url5);
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
};

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
