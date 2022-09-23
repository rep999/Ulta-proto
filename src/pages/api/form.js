import { supabase } from '../../../client.js'

export default async function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.first || !body.last) {
    // Sends a HTTP bad request error code
    const { data, error } = await supabase.from('chirp').insert([
      {
        url: `derp2`,
        text: `inputData.text`,
        category: `inputData.category`,
      },
    ])
    return res.status(400).json({ data })
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.first} ${body.last}` })
}
