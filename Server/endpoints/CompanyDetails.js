const express = require("express");
const app = express();
const Conn = require("../config/database");


app.get("/GetCompanyDetail", (req, res) => {
    Conn.query("SELECT * FROM companydetail WHERE status = 1", (error, rstRow) => {
        if(error)
        {
            res.status(404).send(error);
        }
        
        if(rstRow.length)
        {
            res.json(rstRow);
        }
        else{
            res.json({"No Data Found":"0"});
        }
    })
})

module.exports = app;