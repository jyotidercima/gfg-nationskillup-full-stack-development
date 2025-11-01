import React, { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <h1>User Profile</h1>
      ) : (
        <button onClick={() => setIsAuthenticated(true)}>Log In</button>
      )}
    </div>
  );
}

export default App;




























// import React, { useState, useEffect } from 'react';

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     setTimeout(() => {
//       setData('Fetched Data');
//       setIsLoading(false);
//     }, 2000);
//   }, []);

//   return (
//     <div>
//       {isLoading ? (
//         <h1>Loading...</h1>
//       ) : (
//         <h1>{data}</h1>
//       )}
//     </div>
//   );
// }

// export default App;