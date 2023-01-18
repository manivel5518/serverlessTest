var AWS = require('aws-sdk');

AWS.config.update({
  region: 'XXXXXXX',
  accessKeyId: 'XXXXXXX',
  secretAccessKey: 'XXXXXXXXX',
});

function ddb() {
  return new AWS.DynamoDB.DocumentClient();
}

module.exports.insertdata = async (data) => {
  const db = ddb().put(data).promise();
  console.log(db);
};

module.exports.updatedata = async (data) => {
  const db = ddb().update(data).promise();
  console.log(db);
};
module.exports.deleteitem = async (data) => {
  const db = ddb().delete(data).promise();
  console.log(db);
};
module.exports.getitem = async (data) => {
  const db = await ddb().get(data).promise();
  console.log(db);
  return db;
};
