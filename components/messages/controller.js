function addMessage(user, message) {
  //
  return new Promise((res, rej) => {
    if (!user || !message) {
      console.error("[messageController] There is no message or user");
      rej("No Data Found");
      return false;
    }
    const fullMessage = {
      user,
      message,
      date: new Date(),
    };
    console.log(fullMessage);
    res(fullMessage);
  });
}

module.exports = { addMessage };
