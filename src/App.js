import './App.css';

function App() {
  // this is called JSX = JavaScript XML(similar to HTML)


  return (
    <div className='screen'>
      <video autoPlay muted loop id="myVideo">
        <source src="https://a2development.s3.amazonaws.com/H264HD1080.mov" type="video/mp4" />
      </video>
      <div className='' id='fs-overlay'>
        <img
          id='header-img'
          src='https://1000logos.net/wp-content/uploads/2021/08/Dungeons-and-Dragons-Logo-2014.png' />
        <div className='menu-links'>
          <h3>Create a Character</h3>
          <h3>About Dungeons and Dragons</h3>
        </div>
      </div>
    </div >
  );
}

export default App;
