module.exports = exports = (err, res) => {
  console.log(err);
  res.status(500).json({msg: 'Error reaching Weather Underground'});
};
