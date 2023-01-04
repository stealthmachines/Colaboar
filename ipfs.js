const IPFS = require('ipfs-http-client');

const ipfs = IPFS({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https'
});

const uploadFile = async file => {
  const fileBuffer = Buffer.from(file);
  const addedFile = await ipfs.add(fileBuffer);
  return addedFile[0].hash;
};

const downloadFile = async hash => {
  const file = await ipfs.get(hash);
  return file[0].content.toString();
};

module.exports = {
  uploadFile,
  downloadFile
};
