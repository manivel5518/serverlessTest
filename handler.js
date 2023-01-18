const { insertdata, deleteitem, getitem, updatedata } = require('./database');

module.exports.postmethod = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const params = {
      TableName: 'employee',
      Item: {
        post: data.post,
        emp_id: data.emp_id,
        emp_adress: data.emp_adress,
        emp_name: data.emp_name,
        emp_salary: data.emp_salary,
      },
    };
    insertdata(params);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello there!!!',
        input: event,
      }),
    };
  } catch {
    console.log(err.message);
  }
};

module.exports.putmethod = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const params = {
      TableName: 'employee',
      Key: {
        post: data.post,
        emp_id: data.emp_id,
      },
      ProjectionExpression: '#r',
      ExpressionAttributeNames: { '#r': 'emp_name' },
      ExpressionAttributeValues: {
        ':p': `${data.emp_cname}`,
      },
      UpdateExpression: 'SET #r = :p',
    };
    updatedata(params);
  } catch (err) {
    console.log(err.message);
  }
};
module.exports.deletemethod = async (event) => {
  try {
    const data = JSON.parse(event.body);
    console.log(data);
    params = {
      TableName: 'employee',
      Key: {
        post: data.post,
        emp_id: data.emp_id,
      },
    };
    deleteitem(params);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports.getmethod = async (event) => {
  try {
    const data = event.path.split('/');
    console.log(data[2]);
    console.log(data[3]);
    const params = {
      TableName: 'employee',
      Key: {
        post: data[2],
        emp_id: +data[3],
      },
    };
    return (await getitem(params))?.Item ?? {};
  } catch (err) {
    console.log(err.message);
  }
};
