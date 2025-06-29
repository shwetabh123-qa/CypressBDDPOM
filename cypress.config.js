const cucumber =require("cypress-cucumber-preprocessor").default

const { defineConfig } = require("cypress");

module.exports = defineConfig({

 

  e2e: {

//specPattern:"cypress/e2e/feature/*.feature",

video:true,
screenshotOnRunFailure:true,
screenshotsfolder:"cypress/screnshots",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      on('file:preprocessor',cucumber())
    },
specPattern:"cypress/e2e/feature/*.feature",

  reporter:'mochawesome',
 reporteroptions:{

    charts:true,
    reportPageTitle:'Shwetabh',
    embeddedScrenshots:true,
    saveAllAttempts:false,
    reportDir:'cypress/reports',
    overwrite:false,
    html:true,
    json:false

  },


  },
});
