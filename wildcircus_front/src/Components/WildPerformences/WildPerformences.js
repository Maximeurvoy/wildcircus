import React from 'react';
import NextShow from '../NextShow/NextShow';

class WildPerformences extends React.Component {
constructor(){
  super()
}
  render(){
  return (
    <>
      <div id="tittle">
        <img src="https://i.postimg.cc/1Rn5F4xK/Chapiteau.png" alt="chapiteau" id="tent" />
        <h1>Wild Circus</h1>
      </div>
      <div class="performances">
        <h2 id="performances">Performances</h2>
        <ul>
          <li>
            <h3>Laugh</h3>
            <img src="https://i.postimg.cc/521xD3XP/laugh.jpg" alt="laugh" class="image" />
            <p>As an adult, come and discover our irresistible clowns, between practical jokes and pranks let yourself be carried away by their joy and fall back into childhood.</p>
          </li>
          <li>

            <h3>Dream</h3>
            <img src="https://i.postimg.cc/XNRNk346/dream.jpg" alt="dream" class="image" />
            <p>Let yourself be carried away in a world where the real and the imaginary are one, in the company of our talented magicians, discover a wonderful world limited only by your imagination.</p>
          </li>
          <li>
            <h3>Marvel at</h3>
            <img src="https://i.postimg.cc/MK16s4pM/marvel-at.jpg" alt="marvel_at" class="image" />
            <p>Tame the untameable in the company of our tamers, between roar and razor-sharp claws, watch these fierce felines turn into sweet kittens.</p>
          </li>
        </ul>
      </div>

      <hr />
      <NextShow/>
    </>
  )
  }
};




export default (WildPerformences);