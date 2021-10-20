import { App} from "./config/index";
async function main(){
    const app = new App(5002)
    await app.listen()
}
main();