let privateNumber = 0;

function getPrivateNumber() {
  return privateNumber;
}

function incrementPrivateNumber() {
  privateNumber++;
  console.log('Now privateNumber is %s', privateNumber);
}

function init() {
  privateNumber++;
  console.log('privateNumber is %s.', privateNumber);
};

module.exports = {
  init,
  getPrivateNumber,
  incrementPrivateNumber,
};
