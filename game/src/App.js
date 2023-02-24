
import './App.css';

function App(place) {


  alert('you clicked here');



  return (
    <div className="App">
      <header >
        <h1>Tic-Tac-Toe</h1>
      </header>
      <body>
        <p>Do you want to play?</p>
        click here to play<br/>
      </body>
      <body>
        <div className='rows'>
          <div onClick={place.box}></div>
          <div onclick={place.this}></div>
          <div onclick={place.this}></div>
        </div>
        <div className='rows'>
          <div onclick={place.this}></div>
          <div onclick={place.this}></div>
          <div onclick={place.this}></div>
        </div>
        <div className='rows'>
          <div onclick={place.this}></div>
          <div onclick={place.this}></div>
          <div onclick={place.this}></div>

        </div>
      </body>
    </div>
  );
}

export default App;
