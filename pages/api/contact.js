import Joi from 'joi';
import { connectDatabase, insertDocument } from '../../lib/db-utils';

const contactSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().min(3).max(20).required(),
  message: Joi.string().min(5).max(500).required(),
});

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { value: newMessage, error } = contactSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const details = error.details
      .reduce((errors, detail) => ({ ...errors, [detail.path]: detail.message }), {});
    res.status(422).json({ message: 'Invalid input', details });
    return;
  }

  let client;

  try {
    client = await connectDatabase();
  } catch(error) {
    res.status(500).json({ message: 'Connecting to database failed' });
    return;
  }

  try {
    await insertDocument(client, 'messages', newMessage);
    res.status(201).json({ message: 'Message has been stored successfully', content: newMessage });
  } catch(error) {
    res.status(500).json({ message: 'Inserting data failed' });
    return;
  } finally {
    client.close();
  }
}

export default handler;
