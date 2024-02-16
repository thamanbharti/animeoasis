import axios from "axios";

const hardwareData = {
  Naruto: [],
  Onepiece: [],
  jutsukaisen: [],
  Demonslayer: [],
  onepunchman: [],
};

async function fetchData() {
  try {
    const [narutoResponse, onepieceResponse, jutsukaisenResponse, demonslayerResponse, onepunchmanResponse] = await Promise.all([
      axios.get(`http://localhost:3001/naruto/hardware`),
      axios.get(`http://localhost:3001/onepiece/hardware`),
      axios.get(`http://localhost:3001/jutsukaisen/hardware`),
      axios.get(`http://localhost:3001/demonslayer/hardware`),
      axios.get(`http://localhost:3001/onepunchman/hardware`),
    ]);


    

    
    hardwareData.Naruto = narutoResponse.data;
    hardwareData.Onepiece = onepieceResponse.data;
    hardwareData.jutsukaisen = jutsukaisenResponse.data;
    hardwareData.Demonslayer = demonslayerResponse.data;
    hardwareData.onepunchman = onepunchmanResponse.data;
  } catch (error) {
    console.error(error);
  }
}

fetchData();

export default hardwareData;
