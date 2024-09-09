const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();       
const PORT = 3001;          


app.use(cors());            
app.use(bodyParser.json());   

mongoose.connect('mongodb+srv://database0:database0@cluster0.dsslf.mongodb.net/',{ 
    useNewUrlParser: true,   
    useUnifiedTopology: true, 
})
.then(() => console.log('connected to MongoDB'))
.catch((err) => console.error('MangoDB connection error:',err));

const FormData=require('./models/FormData');

app.get('/', (req, res) => {         
    res.send('Server is Working')   
})

app.post('/submit', async (req, res) => {
    const {name, email, message} = req.body;
    try{
        const formData = new FormData({name, email, message});
        await formData.save();
        res.status(201).json({message: 'Form data saved successfully'});
}catch(error){ 
    res.status(500).json({error: 'Failed to save form data'});
}
   });

   app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
   });
