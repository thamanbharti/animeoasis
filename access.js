import axios from "axios";

const AccessoriesData = {
  Naruto: [],
  Onepiece: [],
  jutsukaisen: [],
  Demonslayer: [],
  onepunchman: [],
};

async function fetchData() {
  try {
    const [narutoResponse, onepieceResponse, jutsukaisenResponse, demonslayerResponse, onepunchmanResponse] = await Promise.all([
      axios.get("http://localhost:3001/naruto/accessories"),
      // axios.get("http://localhost:3001/onepiece/accessories"),
      axios.get("http://localhost:3001/jutsukaisen/accessories"),
      axios.get("http://localhost:3001/demonslayer/accessories"),
      axios.get("http://localhost:3001/onepunchman/accessories"),
    ]);


    

    
    AccessoriesData.Naruto = narutoResponse.data;
    AccessoriesData.Onepiece = onepieceResponse.data;
    AccessoriesData.jutsukaisen = jutsukaisenResponse.data;
    AccessoriesData.Demonslayer = demonslayerResponse.data;
    AccessoriesData.onepunchman = onepunchmanResponse.data;
  } catch (error) {
    console.error(error);
  }
}

fetchData();

export default AccessoriesData;
