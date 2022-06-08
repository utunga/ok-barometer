import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const { NODE_ENV, PORT, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } = process.env;

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor() {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 3000;

    this.initializeSwagger();
  }

  public listen() {
    this.app.listen(this.port, () => {
        console.log(`Server listening on port ${this.port}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeSwagger() {
    const options = {
      swaggerDefinition: {
        info: {
          title: 'REST API',
          version: '1.0.0',
          description: 'Example docs',
        },
      },
      apis: ['swagger.yml'],
    };

    const specs = swaggerJSDoc(options);
    this.app.use('/', swaggerUi.serve, swaggerUi.setup(specs));
  }

}

export default App;
