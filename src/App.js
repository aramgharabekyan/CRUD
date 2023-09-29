
import './App.css';
import {useEffect, useState} from 'react';
import User from './User';
import AddUser from './AddUser';

function App() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => setUser(json));
  }, []);

  function adName(e) {
    setName(e.target.value);
  }

  function adMail(e) {
    setMail(e.target.value);
  }

   function adUser(e) {
    e.preventDefault();

   fetch('https://jsonplaceholder.typicode.com/users',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body:  JSON.stringify(user)
    }).then(res => res.json())
    .then(json => setUser(json))
    .then(   ()=> { setUser([...user,{
      name: name,
      email: mail,
      id:Math.random()
    }])});
   
   
  }
  
  function del(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.status === 200) {
          const updatedUsers = user.filter((el) => el.id !== id);
          setUser(updatedUsers);
        } else {
          console.log('Error:', res.status);
        }
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }
  
  return (
    <div className="App">
      <AddUser  addName={adName} addMail={adMail} addUser={adUser} />
      <User user= {user}  del={del}/>
    </div>
  );
}

export default App;
