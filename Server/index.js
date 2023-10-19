const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.listen("3001", (error) => {
    if(error)
    {
        console.log("Error is "+error);
    }
    else{
        console.log("connected");
    }
})

app.use('/', [
    require("./endpoints/Courses"),
    require("./endpoints/CompanyDetails")
])
