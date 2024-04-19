// 非同期処理
export const func1 = async() => {
  const url = `https://jsonplaceholder.typicode.com/todos/1`;
  const res = await fetch(url);
  return res.json(url);
}

// 直列で非同期処理
export const func2 = async() => {
  const url1 = `https://jsonplaceholder.typicode.com/todos/1`;
  const url2 = `https://jsonplaceholder.typicode.com/todos/2`;
  const url3 = `https://jsonplaceholder.typicode.com/todos/3`;
  const url4 = `https://jsonplaceholder.typicode.com/todos/4`;
  const url5 = `https://jsonplaceholder.typicode.com/todos/5`;

  const fetchUrlTojson = async(url)=>{
   const res = await fetch(url);
   console.log(res.json());
  };
  await fetchUrlTojson(url1);
  await fetchUrlTojson(url2);
  await fetchUrlTojson(url3);
  await fetchUrlTojson(url4);
  await fetchUrlTojson(url5);
  }
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
