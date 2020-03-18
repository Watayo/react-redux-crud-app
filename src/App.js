import React from 'react';
import { findAllByLabelText } from '@testing-library/react';



// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onClick={() => { console.log("I am clicked!") }} />
//     </React.Fragment >
//   );
// }

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Ryo", age: 20 },
    { name: "NoName" }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return (
    <div>Hi! I am {props.name}, and {props.age} yesrs old.</div>
  )
}

User.defaultProps = {
  age: 1
}
export default App;
