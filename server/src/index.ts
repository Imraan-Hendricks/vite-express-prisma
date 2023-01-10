import { NODE_ENV, PORT } from './utils/env';
import { server } from './app';

const startup = () => {
  server.listen(PORT, () => {
    console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
  });
};

const shutdown = () => {
  server.close(() => {
    console.log('Shutting down');
    process.exit(0);
  });
};

startup();
