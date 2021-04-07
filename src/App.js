import React from 'react'
import PostItem from './components/PostWrapper/PostItem/PostItem';
import PostWrapper from './components/PostWrapper/PostWrapper';
import './index.css';
import Form from './components/Form/Form';


const inistialStateArray = 
[
  {
    name: "Karol",
    lastName: "Szymański",
    postContent: "Jestem Karol, i robię pseudo facebooka, tak więc....no tak",
    image: './images/profile.png',
    id: "post1"
},
{
    name: "Radek",
    lastName: "Kaczorowski",
    postContent: "Jestem Radek, i robię pseudo facebooka, tak więc....no tak",
    image: './images/radek.png',
    id: "post2"
},
{
    name: "Rafał",
    lastName: "Szewczyk",
    image: './images/rafał.png',
    id: "post3"
},
{
    name: "Dorota",
    lastName: "Szymańska",
    postContent: "Jestem Dorota, i robię pseudo facebooka, tak więc....no tak",
    image: './images/dorota.png',
    id: "post4"
},
]

class App extends React.Component
{
  state = {

    items: [...inistialStateArray],
    
}
 
addItem = (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  console.log(e.target[2].value);
  console.log(e.target[3].value);
}

  render()
  {
    return(
      <div>
        <Form submitFn={this.addItem} />
        <PostWrapper
           items={this.state.items}
           />
      </div>
    )
  }
}
export default App;
