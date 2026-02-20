const { createClient } = require('@sanity/client');
const fs = require('fs');

const client = createClient({
    projectId: 'v1snxays',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: false
});

client.fetch("* { _id, _type, title, name, _createdAt }")
    .then(docs => {
        fs.writeFileSync('all-docs.json', JSON.stringify(docs, null, 2), 'utf-8');
        console.log('Done');
    })
    .catch(console.error);
