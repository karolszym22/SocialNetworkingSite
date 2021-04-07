import React from 'react'
import PostItem from './components/PostWrapper/PostItem/PostItem';
import PostWrapper from './components/PostWrapper/PostWrapper';
import './index.css';

class App extends React.Component
{
  state = {
    items: [{
      name: "Karol",
      lastName: "Szymański",
      postContent: "Jestem Karol, i robię pseudo facebooka, tak więc....no tak",
      image: profile,
      id: "post1"
  },
  {
      name: "Radek",
      lastName: "Kaczorowski",
      postContent: "Jestem Radek, i robię pseudo facebooka, tak więc....no tak",
      image: radek,
      id: "post2"
  },
  {
      name: "Rafał",
      lastName: "Szewczyk",
      image: rafał,
      id: "post3"
  },
  {
      name: "Dorota",
      lastName: "Szymańska",
      postContent: "Jestem Dorota, i robię pseudo facebooka, tak więc....no tak",
      image: dorota,
      id: "post4"
  }
]};
  }
  render()
  {
    return(
      <div>
        <PostItem items={items}/>
      </div>
    )
  }
}
export default App;
