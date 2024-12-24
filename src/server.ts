import { Server } from "http";
import app from "./app";

const port = 3000;
let server: Server

  const main = async()=> {
    try {
      server= app.listen(port, () => {
        console.log(`Server  is running on port ${port}`);
      });
    } catch (error) {
      console.log(error)
    }


}

main();


