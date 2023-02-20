// middleware - userdefined logging
const log =(req, res, next) =>{
    console.log('Logging...');
    // to continue to next middleware
    next();
};

// middleware - userdefined  authentication 
const auth = (req, res, next) => {
    console.log('Authenticating...');
    // to continue to next middleware
    next();
}

// export
export { log, auth };

