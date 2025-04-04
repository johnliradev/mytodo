const validateTask = (req, res, next) => {
  const { body } = req;
  if (body.title === undefined) {
    return res.status(400).json({ message: 'The field "title" is required' });
  }

  if (body.title === "") {
    return res.status(400).json({ message: "title cannot be empty" });
  }
  if (body.content === undefined) {
    return res.status(400).json({ message: 'The field "content" is required' });
  }

  if (body.content === "") {
    return res.status(400).json({ message: "content cannot be empty" });
  }
  next();
};
const validateFieldStatus = (req, res, next) => {
  const { body } = req;

  if (body.status === undefined) {
    return res.status(400).json({ message: 'The field "status" is required' });
  }

  if (body.status === "") {
    return res.status(400).json({ message: "status cannot be empty" });
  }

  next();
};

export default { validateTask, validateFieldStatus };
