import './App.css';

function App() {
  const title = 'Welcome to the Blog';
  const likes = 50;
  const link = "https://www.google.com";


  return (
    <div className="App">
      <div className='Content'>
        <h1>{ title }</h1>
        <p>Here Likes {likes} times</p>
        <p>{50}</p>
        <p>{ "hellow Guys" }</p>
        <p>Number Test:{ [ 1,2,3,4,5 ] }</p>
        <p>{ Math.random() * 50}</p>
        <a href={link}>Google Search</a>
      </div>
    </div>
  );
}

export default App;
