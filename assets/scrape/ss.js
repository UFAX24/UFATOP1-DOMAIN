
const scrape = require('website-scraper');
const options = {
urls: ['https://dooball24hd.com/'],
directory: 'scrape/'
};

// with async/await
//const result = await scrape(options);
scrape({
        urls: ['https://dooball24hd.com/'],
        directory: 'scrape/',
        sources: [
            {selector: 'img', attr: 'src'},
            {selector: 'link[rel="stylesheet"]', attr: 'href'},
            {selector: 'script', attr: 'src'}
        ]
        });
// with promise
scrape(options).then((result) => {});

// or with callback
scrape(options, (error, result) => {});