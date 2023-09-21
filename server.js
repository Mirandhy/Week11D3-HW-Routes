const express = require("express");
const app = express( );
const PORT = 3000;
const fs = require( 'fs' ) ; 
const fans = require("./models/fans");


app.engine('portal', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
        const rendered = content
        .toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>')
        .replace('#content#','<div>'+ options.content + '</div>' )
        .replace('#url#', options.url );

    return callback(null, rendered)
  })
})


app.get('/fans', (req, res) => {
    res.send(fans);
})


app.get('/fans/:id', (req, res)=> {
    res.send(fans[req.params.id]);
})

app.set("views", "./views");   
app.set("view engine", "portal"); 


app.get("/", (req, res) =>{
    res.render("template", {
        title:  "What a Wonderful World",
        message: "All of Me",
        content: "Ordinary People",
    })
})
app.get("/JohnLegend", (req, res) =>{
    res.render("template2", {
        title:  "John Legend",
        message: "John Legend's Family",
        content: "Family Man",
        url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D10158722596988023&tbnid=kezyWZmwazWQMM&vet=12ahUKEwj668GgsbqBAxVIClkFHUnvBoIQMygCegQIARBX..i&imgrefurl=https%3A%2F%2Fwww.facebook.com%2F22516413022%2Fposts%2Fwe-all-need-to-take-care-of-each-other-right-now-so-we-are-postponing-the-bigger%2F10158722597988023%2F&docid=8xnCb827bjqT9M&w=1080&h=1080&q=john%20legend%20tour&hl=en&ved=2ahUKEwj668GgsbqBAxVIClkFHUnvBoIQMygCegQIARBX"
    })
})
app.get("/Famous Family", (req, res) =>{
    res.render("template1", {
        title:  "Married",
        message: "Married to model Christy Tiegan",
        content: "Spotlight all around",
    })
})
app.get("/Grammy", (req, res) =>{
    res.render("template2", {
        title:  "Multi-Grammy Winner",
        message: "Get Lifted, netted him three Grammys in his inaugural appearance: Best New Artist, Best R&B Album, and Best Male R&B Vocal Performance for Ordinary People",
        content: "2006 Grammy Awards",
        url: "https://www.nbc.com/sites/nbcblog/files/styles/scale_960_no_scale/public/2023/06/john-legend-awards-2.jpg"
    })
})
app.get("/heart", (req, res) =>{
    res.render("template2", {
        title:  "Causes and Charitable Work",
        message: "Legend has advocated for social change",
        content: "Charities",
        url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ffc%2FJohn_Legend_2019_by_Glenn_Francis_%2528cropped%2529.jpg&tbnid=95V0rxYcXnHKVM&vet=12ahUKEwiJ2ffO0bqBAxUcJGIAHRBiDssQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FJohn_Legend&docid=g5V0IdN2W29-rM&w=2096&h=2914&q=john%20legend%20image&hl=en&ved=2ahUKEwiJ2ffO0bqBAxUcJGIAHRBiDssQMygAegQIARB0"
    })
})
app.get("/Songs", (req, res) =>{
    res.render("template", {
        title:  "Several Big Hitters",
        message: "Continues to make good music",
        content: "All of Me, Wild, and Save Room",
    })
})
app.get("/Hometown", (req, res) =>{
    res.render("template", {
        title:  "Hometown",
        message: "John Legend is from Springfield, Ohio",
        content: "Springfield, Ohio",
    })
})
app.get("/Tour", (req, res) =>{
     res.render("template2", {
         title:  "Dates",
         message: "Watch the Legend",
         content: "Tour Dates",
         url: "https://variety.com/wp-content/uploads/2023/04/GettyImages-1475083421-e1681082532900.jpg?w=1000&h=563&crop=1&resize=681%2C383"
     })
})
app.get("/event", (req, res) =>{
     res.render("template", {
         title:  "John Legend appereances over the years",
         message: "Events, restaurants, spotting",
         content: "Pictures",
     })

})
app.get("/contact", (req, res) =>{
    res.render("template", {
        title:  "Contact",
        message: "Contact John Legend",
        content: "Contact Form",
    })
})

app.listen(PORT, ( ) => {
console.log(`Listening on port: ${PORT}`)
}) 