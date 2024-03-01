import './App.css';
import DeleteUsers from './components/DeleteUsers';
import GetUsers from './components/GetUsers';
import PostUsers from './components/PostUsers';

function App() {
  return (
    <div className="App">
      <GetUsers />
      <PostUsers />
      <DeleteUsers />
    </div>
  );
}

export default App;
