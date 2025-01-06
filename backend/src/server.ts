import expres from "express"
import userRoutes from "./Routes/userRoutes"
import contentRoutes from "./Routes/contentRoutes"
import createDB from "./DB/db";
import cors from "cors"
const app = expres();

const PORT = process.env.PORT || 3000;

app.use(expres.json())
app.use(cors())

app.use("/api/v1/user/",userRoutes)
app.use("/api/v1/content/",contentRoutes)

app.listen(PORT,()=>{
    createDB();
    console.log(`Server is running in ${PORT}`)
})