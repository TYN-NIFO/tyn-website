const { createClient } = require('@sanity/client');
const fs = require('fs');

const client = createClient({
    projectId: 'v1snxays',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: false
});

client.fetch("*[_type in ['blog', 'whitepaper', 'ynsight', 'openPosition']] { _id, _type, title, _createdAt } | order(_createdAt asc)")
    .then(docs => {
        fs.writeFileSync('docs.json', JSON.stringify(docs, null, 2), 'utf-8');
        console.log('Done');
    })
    .catch(console.error);
