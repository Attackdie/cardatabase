// import React from 'react';
import React, { useState } from 'react';
// import './App.css';


//2023 07 07 이벤트 폼 처리 팝업창 구현
function MyList() {
  const [text, setText] = useState('');
  
  //입력 요소의 내용이 변경되면 값을 저장
  const inputChanged = (event) => {
    setText(event.target.value);
  }
  const handleSubmit = (event) => {
    alert(`You typed: ${text}`);
    //어이 없는 오류 alert 'You typed: ${text}' X 역따움표를 사용하지 않았을때 뜨는오류 `You typed: ${text}` O
    // alert('You typed: ${text}'); X
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={inputChanged}
      value={text}/>
      <input type="submit" value="Press me" />

    </form>
  );

};

export default MyList;

// //2023 07 07 버튼 카운트 기능 테스트 
// function Counter() {
//   //초기값이 0인 카운트 상태
//   const [count, setCount] = useState(0);

//   //랜더링이 끝나면 매번 호출됨
//   useEffect(() => {
//     console.log('매번 useEffect 호출하기');
//     //함수 봔환 예제 코드
//     return () => {
//       console.log('Clean up function');
//     }
//   }, [count]);
//   return (
//   <div>
//     <p>Counter = {count}</p>
//     <button onClick={() => setCount(count + 1) }>
//         Increment
//       </button>
//   </div>
//   );
// };

// export default Counter;


// function App() {
//   return (
//     <>

//     <h1>Hello World</h1>
//     <p>This is my First React Componet</p>
//     </>

//   );
// }
//   const [keyword, setKeyword] = useState('');
//   const [data, setData] = useState([]);

//   const fetchData = () => {
//     fetch(`https://api.github.com/search/repositories?q=${keyword}`)
//     .then(response => response.json())
//     .then(data => setData(data.items))
//     .catch(err => console.error(err))
//   }

//   return (
//     <div className="App">
//       <input value={keyword} 
//         onChange={e => setKeyword(e.target.value)} />
//       <button onClick={fetchData}>Fetch</button>
//       <table style={{margin: 'auto'}}>
//         <tbody>
//           {
//             data.map(repo => 
//               <tr key={repo.id}>
//                 <td>{repo.full_name}</td>
//                 <td>
//                   <a href={repo.html_url}>{repo.html_url}</a>
//                 </td>
//               </tr>  
//             )
//           }
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;
