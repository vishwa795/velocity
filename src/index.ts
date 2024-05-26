require("dotenv").config();
import logger from "jet-logger";

import envVars from "./constants/env";
import server from "./server";

// **** Run **** //

const SERVER_START_MSG =
  "Express server started on port: " + envVars.port.toString();

server.listen(envVars.port, () => logger.info(SERVER_START_MSG));
