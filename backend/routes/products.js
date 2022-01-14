const productRoutes = (app, fs) => {
    // variables
    const dataPath = ('./data/product_lists.json');
    // refactored helper methods
    const readFile = (
      callback,
      returnJson = false,
      filePath = dataPath,
      encoding = 'utf8'
    ) => {
      fs.readFile(filePath, encoding, (err, data) => {
        if (err) {
          throw err;
        }
  
        callback(returnJson ? JSON.parse(data) : data);
      });
    };
  
    const writeFile = (
      fileData,
      callback,
      filePath = dataPath,
      encoding = 'utf8'
    ) => {
      fs.writeFile(filePath, fileData, encoding, err => {
        if (err) {
          throw err;
        }
  
        callback();
      });
    };
  
    // READ
    app.get('/products', (req, res) => {
      fs.readFile(dataPath, (err, data) => {
        if (err) {
          throw err;
        }
        console.log(res)
        res.send(JSON.parse(data));
      });
    });
  
// app.post('/products', (req, res) => {
//   readFile(data => {

//     let existingData;
//     // Note: this needs to be more robust for production use. 
//     // e.g. use a UUID or some kind of GUID for a unique ID value.
//     // const newUserId = Date.now().toString();
//     fs.readFile(dataPath, 'utf8', (err, readdata) => {
//       if (err) {
//         throw err;
//       }
//       existingData=JSON.parse(readdata)
//       // res.send();
//     });
//     // // add the new user
//     data = JSON.stringify(req.body)
//     existingData=[existingData,...data]

//     writeFile(JSON.stringify(existingData, null, 2), () => {
//       res.status(200).send('new user added');
//     });
//   }, true);
// });
};
  
  module.exports = productRoutes;