import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/db.js'
import router from "./routes/JobRoute.js";
import kanbanrouter from './routes/KanbanRoute.js';
import analyticsrouter from './routes/AnalyticsRouter.js';

const app=express()

await connectDB()

//Middlewares
app.use(cors())
app.use(express.json())

//Routes
app.get('/',(req,res)=>res.send("API is Working"))
app.use("/api/applications", router);
app.use("/api/jobs", kanbanrouter);
app.use("/api/analytics", analyticsrouter);

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('Server is running on port ',+PORT)
})

export default app;