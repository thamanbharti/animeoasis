import axios from "axios";

const comicsData = {
  Naruto: [],
  Onepiece: [],
  jutsukaisen: [],
  Demonslayer: [],
  onepunchman: [],
};

async function fetchData() {
  try {
    const [narutoResponse, onepieceResponse, jutsukaisenResponse, demonslayerResponse, onepunchmanResponse] = await Promise.all([
      axios.get(`http://localhost:3001/naruto/comics`),
      // axios.get(`http://localhost:3001/onepiece/comics`),
      axios.get("http://localhost:3001/jutsukaisen/comics"),
      axios.get("http://localhost:3001/demonslayer/comics"),
      axios.get("http://localhost:3001/onepunchman/comics"),
    ]);


    

    
    comicsData.Naruto = narutoResponse.data;
    comicsData.Onepiece = onepieceResponse.data;
    comicsData.jutsukaisen = jutsukaisenResponse.data;
    comicsData.Demonslayer = demonslayerResponse.data;
    comicsData.onepunchman = onepunchmanResponse.data;
  } catch (error) {
    console.error(error);
  }
}

fetchData();

export default comicsData;
