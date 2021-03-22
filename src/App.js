import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {


  let CARDS = [
    {
      id:0,
      imageURL:"https://i.pinimg.com/originals/82/db/f2/82dbf2759fe8ebea414e3e83b894dc2c.jpg",
      cover:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
      flipped:false,
      win:false
    },
    {
      id:1,
      imageURL:"https://i.pinimg.com/originals/82/db/f2/82dbf2759fe8ebea414e3e83b894dc2c.jpg",
      cover:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
      flipped:false,
      win:false
    },
    {
      id:2,
      imageURL:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-and-morty-season-4-trailer-1-1570450125.jpg?crop=0.564xw:1.00xh;0,0&resize=480:*",
      cover:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
      flipped:false,
      win:false
    },
    {
      id:3,
      imageURL:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-and-morty-season-4-trailer-1-1570450125.jpg?crop=0.564xw:1.00xh;0,0&resize=480:*",
      cover:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
      flipped:false,
      win:false
    },
    {
      id:4,
      imageURL:"https://images-na.ssl-images-amazon.com/images/I/61pex1l0alL._AC_SY679_.jpg",
      cover:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
      flipped:false,
      win:false
    },
    {
      id:5,
      imageURL:"https://images-na.ssl-images-amazon.com/images/I/61pex1l0alL._AC_SY679_.jpg",
      cover:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
      flipped:false,
      win:false
    },
    {
      id:6,
      imageURL:"https://pyxis.nymag.com/v1/imgs/bb2/701/c4787eccc4a76307518ae0632fb9196faa-rick-and-morty.rsquare.w700.jpg",
      cover:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
      flipped:false,
      win:false
    },
    {
      id:7,
      imageURL:"https://pyxis.nymag.com/v1/imgs/bb2/701/c4787eccc4a76307518ae0632fb9196faa-rick-and-morty.rsquare.w700.jpg",
      cover:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
      flipped:false,
      win:false
    },
    {
      id:8,
      imageURL:"https://assets.tonica.la/__export/1592161853116/sites/debate/img/2020/06/14/rick-sanchez-portada.jpg_242310155.jpg",
      cover:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
      flipped:false,
      win:false
    },
    {
      id:9,
      imageURL:"https://assets.tonica.la/__export/1592161853116/sites/debate/img/2020/06/14/rick-sanchez-portada.jpg_242310155.jpg",
      cover:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
      flipped:false,
      win:false
    },
    {
      id:10,
      imageURL:"https://m.media-amazon.com/images/M/MV5BYTRhMjhjMTEtZTY0MC00NjAyLWJkNDQtZmYzN2FjNDM1NTI0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY1200_CR744,0,630,1200_AL_.jpg",
      cover:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
      flipped:false,
      win:false
    },
    {
      id:11,
      imageURL:"https://m.media-amazon.com/images/M/MV5BYTRhMjhjMTEtZTY0MC00NjAyLWJkNDQtZmYzN2FjNDM1NTI0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY1200_CR744,0,630,1200_AL_.jpg",
      cover:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
      flipped:false,
      win:false
    },
    {
      id:12,
      imageURL:"https://spoiler.bolavip.com/__export/1597352838832/sites/bolavip/img/2020/08/13/rick_and_morty_dan_harmon_polemica_cancelado_cancelled_crop1597352837619.jpg_423682103.jpg",
      cover:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
      flipped:false,
      win:false
    },
    {
      id:13,
      imageURL:"https://spoiler.bolavip.com/__export/1597352838832/sites/bolavip/img/2020/08/13/rick_and_morty_dan_harmon_polemica_cancelado_cancelled_crop1597352837619.jpg_423682103.jpg",
      cover:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
      flipped:false,
      win:false
    },
    {
      id:14,
      imageURL:"https://static.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest/top-crop/width/360/height/360?cb=20160923150728",
      cover:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
      flipped:false,
      win:false
    },
    {
      id:15,
      imageURL:"https://static.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest/top-crop/width/360/height/360?cb=20160923150728",
      cover:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
      flipped:false,
      win:false
    }
  ]
  //BARAJAR ARRAY
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  shuffle(CARDS);
    
  

  const [cards,setCards] = useState(CARDS);
  const [intentos,setIntentos] = useState([]);
  const [won, setWon] = useState(0);
 
  
  
  
  function voltear(id,imageURL){
    setCards(
      cards.map(item => 
          item.id === id &&item.flipped===false &&item.win===false
          ? {...item, flipped : !item.flipped} 
          : item 
  ))
  if(intentos.length<2){
    setIntentos([...intentos,imageURL]); 
  }
  
  
  }
  useEffect(()=>{
    const timeout = setTimeout(() => {
      if(intentos.length==2 ){
        if(intentos[0]===intentos[1]){
          console.log("correcto")
          setWon(won+1)
          setCards(
            cards.map(item =>
              (item.imageURL===intentos[0]&&item.win===false)
              ?
              {...item, win : !item.win}
              :
              item
        ))
        
          }
          else{
          console.log("incorrecto");
          setCards(
            cards.map(item =>(item.flipped===true&&item.win===false)?{...item, flipped : !item.flipped} :item
        ))
          
          }
          
          setIntentos([])
      }
      return () => {
        clearTimeout(timeout);
      };
    }, 200);
    
    
    
  },[intentos,cards])
  

    
  const restart= ()=>{
    //TODO
  }
  
  

  return (
    <div id="main">
      {cards.map(card=>
        <div key={card.id} className="card">
        <img  onClick={()=>voltear(card.id,card.imageURL)} src={card.flipped ? card.imageURL:card.cover}/>
        </div>
      )}  
    <h1>{won===16?"YOU WON":""}</h1>
    <button onClick={restart}>Restart game</button>
    </div>
    
  );
}


export default App;
