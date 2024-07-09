import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import bodyParser from 'body-parser';
import userRouter from './routes/UserRoute.js';
import employeeRouter from './routes/EmployeeRoute.js';
import departmentRouter from './routes/DepartmentRoutes.js';
import positionRouter from './routes/PositionRoute.js';


dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(
  bodyParser.raw({
    type: function () {
      return true;
    },
    limit: '10mb',
  })
);
app.use(cookieParser());
app.use(express.json());

const whitelist = ['http://localhost:5173', 'http://127.0.0.1:5173', 'https://infopayroll-solution.netlify.app'];

const corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (!origin) {
      return callback(null, true);
    } else if (whitelist.indexOf(origin) === -1) {
      return callback(new Error('not allowed by CORS'), false);
    }
    return callback(null, true);
  },
};


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, POST, PUT, DELETE');
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header('Access-Control-Allow-Credentials', 'true');
  
    next();
  });
  
  app.use(cors({
    origin:  ['http://localhost:5173', 'http://127.0.0.1:5173', 'https://infopayroll-solution.netlify.app'], 
    methods: '*',  
  }));
    
  //swagger config
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'IFSPOS API',
        version: '1.0.0',
        description: 'Documentation for IFSPOS API',
        contact: {
          name: 'API Support',
          url: 'http://www.mtnng.com/support',
          email: 'mtnng@example.com',
        },
      },
  
      servers: [
        {
          url: 'http://localhost:4001',
          description: 'My API Documentation',
        },
      ],
    },
    apis: ['./routes/*.js', './routes/payloads/*.js'],
  };
  
  const specs = swaggerJSDoc(options);

  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

  app.use("/api/v1", userRouter)
  app.use("/api/v1", employeeRouter)
  app.use("/api/v1", departmentRouter)
  app.use("/api/v1", positionRouter)

  const port = 8080;

process.on('uncaughtException', (err) => {
  console.log(err)
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  process.exit(1);
});

// let client = appInsights.defaultClient;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// initializeWebSocket(server);
// io.on('connection', (socket) => {
//   socket.on('message', (message) => {
//     io.emit('message', message);
//   });
// });

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down... WITH ERROR ', err);
  app.close(() => {
    process.exit(1);
  });
});
