

import LeftNav from '../components/LeftNav';
import Post from '../components/Post';

const Home = () => {
 
    return (
   
  <div className="home">
    <LeftNav />
    <div className="main">
      <div className="home-header">
     
      </div>
      <Post />
    </div>
    
  </div>
       
    );
};

export default Home;