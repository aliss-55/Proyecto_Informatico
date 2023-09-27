const express = require('express'); //Invocamos a express
const app = express();

app.use(express.urlencoded({extended:false})); //Con esto capturamos datos del formu
app.use(express.json());

const dotenv = require('dotenv')
dotenv.config({path:'./env/.env'})

app.use('/resources', express.static('public'));//Esto llama todo lo public
app.use('/resources', express.static(__dirname + '/public'));//Esto creo que lo podemos quitar

app.use('/css', express.static('css'));//Esto llama todo lo public
app.use('/css', express.static(__dirname + '/css'));//Esto creo que lo podemos quitar

app.set('view engine','ejs'); //No se si usemos estas plantillas toncs aja, pero es el motor de plantillas

const bcrypt = require('bcryptjs'); //hace el hash de passwd

const session = require('express-session')
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized:true
}))

const connection = require('./database/db.js'); //Invocar conexion BD

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/home', (req,res)=>{
    res.render('home')
})

app.post('/auth', async (req, res)=> {
	const Email = req.body.Email;
	const Password = req.body.Password;    
    let passwordHash = await bcrypt.hash(Password, 10);
	if (Email && Password) {
		connection.query('SELECT * FROM users WHERE email = ?', [Email], async (error, results, fields)=> {
			if( results.length == 0 || !(await bcrypt.compare(Password, results[0].Password)) ) {    
				res.render('login', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Email y/o contraseña incorrectas",
                        alertIcon:'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'    
                    });
			
			} else {         
     
				req.session.loggedin = true;                
				req.session.name = results[0].name;
				res.render('login', {
					alert: true,
					alertTitle: "Conexión exitosa",
					alertMessage: "¡LOGIN CORRECTO!",
					alertIcon:'success',
					showConfirmButton: false,
					timer: 1500,
					ruta: ''
				});        			
			}			
			res.end();
		});
	} else {	
		res.send('Ingrese un usario  contraseña!');
		res.end();
	}
});

app.listen(3000, (req, res)=>{ //La pag se vea en con express
    console.log('server running in http://localhost:3000')
})

