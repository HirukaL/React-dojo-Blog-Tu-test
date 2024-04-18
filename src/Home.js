const Home = () => {

    const handleClick = () => {
        console.log('Hwllow, Guys');
    }

    const handleClickAgain = (name, e) => {
        console.log('Hellow' + name, e.target);
    }
    return (  
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick ={(e) => handleClickAgain('Hiruka', e)}>Click me again</button>
        </div>
    );
}
 
export default Home;    