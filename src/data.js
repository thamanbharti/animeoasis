import axios from "axios";

const Data = {
  Naruto: [],
  Onepiece: [],
  jutsukaisen: [],
  Demonslayer: [],
  onepunchman: [],
};

async function fetchData() {
  try {
    const [narutoResponse, onepieceResponse, jutsukaisenResponse, demonslayerResponse, onepunchmanResponse] = await Promise.all([
      axios.get(`http://localhost:3001/naruto/wears`),
      // axios.get(`http://localhost:3001/onepiece/wears`),
      axios.get(`http://localhost:3001/jutsukaisen/wears`),
      axios.get(`http://localhost:3001/demonslayer/wears`),
      axios.get(`http://localhost:3001/onepunchman/wears`),
    ]);

    Data.Naruto = narutoResponse.data;
    Data.Onepiece = onepieceResponse.data;
    Data.jutsukaisen = jutsukaisenResponse.data;
    Data.Demonslayer = demonslayerResponse.data;
    Data.onepunchman = onepunchmanResponse.data;

    // console.log(narutoResponse.data)
  } catch (error) {
    console.error(error);
  }
}

// Async initialization function
async function initializeData() {
  await fetchData();
}

// Call the initialization function when the application starts
initializeData();

export default Data;
