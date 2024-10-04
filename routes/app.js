module.exports = app => {

  app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        next();
  });
  var router = require("express").Router();
 // const rateLimit = require('express-rate-limit');
  const { webapps, banner } = require('../apps/raypay')

  // Define rate limiting rule: max 100 requests per 15 minutes per IP
//  const limiter = rateLimit({
 //   windowMs: 15 * 60 * 1000, // 15 minutes
 //   max: 100, // Limit each IP to 100 requests per `windowMs`
  //  message: "Too many requests from this IP, please try again after 15 minutes.",
   // headers: true,
  //});

  // Apply rate limiting to /raypayapp routes only
//  app.use('/raypayapp', limiter);
  router.post("/getwebapps", webapps);
  router.post("/banner", banner);
  // Apply the router with your routes to the /raypayapp path
  app.use('/raypayapp', router);
};
