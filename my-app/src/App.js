// import React from 'react';
import React, { useState } from 'react';
// import './App.css';


//2023 07 07 버튼 카운트 기능 테스트 
function Counter() {
  //초기값이 0인 카운트 상태
  const [count, setCount] = useState(0);

  return (
  <div>
    <p>Counter = {count}</p>
    <button onClick={() => setCount(count + 1) }>
        Increment
      </button>
  </div>
  );
};

export default Counter;


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
