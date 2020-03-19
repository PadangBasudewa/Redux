import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class = "navbar navbar-expand-lg navbar-light bg-light">
        <a class = "navbar-brand" href="#">React</a>
        <button class = "navbar-toggler" type = "button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"aria-expanded="false" aria-label="Toggle navigation">
          <span class = "navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class = "navbar-nav">
              <li class="nav-item active">
                <a class ="nav-link" href="#home">Home <span class = "sr-only">(current)</span></a>
              </li>
              <li class = "nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>
            </ul>
          </div>
      </nav>
  

    <header className= "App-header">
      <img src={logo} className="App-logo" alt="logo"/>

        <div class = "container">
          <table class="table">
            <thead class ="thead-dark">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama</th>
                <th scope="col">Alamat</th>
              </tr>
            </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Padang</td>
              <td>Malang</td>
            </tr>
            <tr>
              <th scope = "row">2</th>
              <td>Yennefer</td>
              <td>Palembang</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Cirillia</td>
              <td>Jakarta</td>
              </tr>
          </tbody>
          </table>
        </div>
    </header>
    </div>
  );
}

export default App;
