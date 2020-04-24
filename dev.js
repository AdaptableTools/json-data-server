const expressApp = require("./json-server/app");

const app = expressApp("json-server");

const port = 3002;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log(
    `Goto http://localhost:3002/.netlify/functions/json-server/orders?_limit=2`
  );
});
