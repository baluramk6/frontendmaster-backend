const app = require("../index");
const connect = require("./configs/db");
///nwwsadzdf

const PORT = 8080

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Listning at PORT ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
