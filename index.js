// const person=require('./person')
// const Person=require('./person')

// const person1=new Person('john',30);
// person1.greeting();

const express=require('express')
const fs=require('fs');
let app=express();
//middle ware for post request
app.use(express.json())
let movies=JSON.parse(fs.readFileSync('./data/movies.json'))

//Route handling function
const getAllMovies=(req,res)=>{
    res.status(200).json({
        status:"success",
        count:movies.length,
        data:{
            movies: movies
        }
    })
    }
const addMovies=(req,res)=>{
    //req argument doesnot have body method
    //In order to attach the request body to this request object we need to use the middleware 
    const newId=movies[movies.length-1].id+1;
    const newMovie=Object.assign({id:newId},req.body)//object.assign merge two objects
    movies.push(newMovie);
    fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
        //creating new resource=201
          res.status(201).json({
            status:"success",
            data:{
                movies:newMovie
            }
          })
    })
    // console.log(req.body);
    // res.send('Created');
    
    }
 const getMovieById=(req,res)=>{
    console.log(req.params);
    const id=+req.params.id;//to convert string into integer or we can also use *1 
    res.status(200).json({
        status:"success",
        data:{
//It returns the movie object
            movie:movies.find(el=>el.id===id)
        }
    });
}
// //Get-api movies
// app.get('/api/v1/movies',getAllMovies)

// //Post-api/v1/movies
// app.post('/api/v1/movies',addMovies)
// //get-route parameters//we can specify multiple route parameters//all values are stored as string
// app.get('/api/v1/movies/:id/:name?',getMovieById)

//since end point is same
//chaining
app.route('/api/v1/movies')
.get(getAllMovies)
.post(addMovies)

app.route('/api/v1/movies/:id')
.get(getMovieById)
//create a server
let port=3000;
app.listen(port,()=>{
console.log('server has started');
})

//route mounting
// const moviesRoutes=express.Router();
// moviesRoutes.route('/')
// .get(getAllMovies)
// .post(addMovies)

// moviesRoutes.route('/:id')
// .get(getAllMovies)
// .post(addMovies)

// app.use('/api/v1/movies',moviesRoutes)



