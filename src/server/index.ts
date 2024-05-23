import express from 'express';
import {api} from "./api.ts";


const app = express();
app.use(api)
app.get('/api', (req,res)=>res.send("ad"))
app.listen(3002, ()=>console.log("Started"))