import axios from "axios";

const sketchBookData = {
  Naruto: [],
  Onepiece: [],
  jutsukaisen: [],
  Demonslayer: [],
  onepunchman: [],
};

async function fetchData() {
  try {
    const [narutoResponse, onepieceResponse, jutsukaisenResponse, demonslayerResponse, onepunchmanResponse] = await Promise.all([
      axios.get("http://localhost:3001/naruto/sketchbook"),
      // axios.get("http://localhost:3001/onepiece/sketchbook"),
      axios.get("http://localhost:3001/jutsukaisen/sketchbook"),
      axios.get("http://localhost:3001/demonslayer/sketchbook"),
      axios.get("http://localhost:3001/onepunchman/sketchbook"),
    ]);


    

    
    sketchBookData.Naruto = narutoResponse.data;
    sketchBookData.Onepiece = onepieceResponse.data;
    sketchBookData.jutsukaisen = jutsukaisenResponse.data;
    sketchBookData.Demonslayer = demonslayerResponse.data;
    sketchBookData.onepunchman = onepunchmanResponse.data;
  } catch (error) {
    console.error(error);
  }
}

fetchData();

export default sketchBookData;
