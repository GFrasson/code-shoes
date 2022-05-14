import express from 'express';
import cors from 'cors';

const app = express();


// Middlewares -----------------------------------------------------------------
app.use(express.json());
app.use(cors({
  origin: "*"
}));


// Routes ----------------------------------------------------------------------
app.get('/', (req, res) => {
  console.log("GET /");
  res.status(200).send("Hello World");
});

app.get('/test', (req, res) => {
  console.log("GET /test");
  res.status(200).send("Rota teste");
});


// Start server ----------------------------------------------------------------
app.listen('8080', () => {
  console.log("Server started on http://localhost:8080...")
})