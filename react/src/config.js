const env = process.env.NODE_ENV || "development";

const config = require(__dirname + "\\.\\config.json")[env];

export default { FB_AppId: config.FB_AppId };
