const mongoose = require('mongoose');

var url = 'mongodb+srv://exam_made_easy:bindass@165@cluster0.mlg92.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(
        url,
        {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) console.log(err)
            else console.log('Database Connected!')
        }
)