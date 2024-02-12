import axios from "axios";

const shoesData = {
  Naruto: [],
  Onepiece: [],
  jutsukaisen: [],
  Demonslayer: [],
  onepunchman: [],
};

async function fetchData() {
  try {
    const [narutoResponse, onepieceResponse, jutsukaisenResponse, demonslayerResponse, onepunchmanResponse] = await Promise.all([
      axios.get(`http://localhost:3001/naruto/shoes`),
      // axios.get(`http://localhost:3001/onepiece/shoes`),
      axios.get(`http://localhost:3001/jutsukaisen/shoes`),
      axios.get(`http://localhost:3001/demonslayer/shoes`),
      axios.get(`http://localhost:3001/onepunchman/shoes`),
    ]);


    

    
    shoesData.Naruto = narutoResponse.data;
    shoesData.Onepiece = onepieceResponse.data;
    shoesData.jutsukaisen = jutsukaisenResponse.data;
    shoesData.Demonslayer = demonslayerResponse.data;
    shoesData.onepunchman = onepunchmanResponse.data;
  } catch (error) {
    console.error(error);
  }
}

fetchData();

export default shoesData;
