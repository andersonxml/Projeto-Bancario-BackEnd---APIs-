import { app } from "./app.js";

function startServer() {
    app.listen(3333, () => {
        console.log("------------------------------");
        console.log();
        console.log("Server is running at port 3333");
        console.log();
        console.log("------------------------------");
    })
}
startServer();
