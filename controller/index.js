module.exports = function confirmAction(err) {
  if (err) {
    res.send({
      success: false,
      message: "Error creating user",
      data: err,
    });
  } else {
    res.send({
      success: true,
      message: "User created successfully!",
      data: null,
    });
    res.end();
  }
};
