import fs from 'node:fs';
import http from 'node:http';
import url from 'node:url';
import slugify from 'slugify';
import replaceTemplate from './modules/replaceTemplate.mjs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const port = process.env.PORT || 3000;

/////////////////////////////////
// FILES
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/card.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  'utf-8'
);

const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// convert the product name to a slug to lowercase
const slugs = dataObj.map(el => slugify(el.productName, { lower: true }));


/////////////////////////////////
// SERVER
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
/** app routes */

  // Overview page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });

    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    // template rendering
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);

    // Product page
  } else if (pathname === '/product') {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });
    // grab query id
    const DetailsBy = dataObj[query.id];
    // template rendering by clicking on Details
    const output = replaceTemplate(tempProduct, DetailsBy);
    res.end(output);

    // API
  } else if (pathname === '/api') {
    res.writeHead(200, {
      'Content-type': 'application/json'
    });
    res.end(data);

    // Not found
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(port, () => {
  console.log(`the server is listening on port ${port}`);
});
