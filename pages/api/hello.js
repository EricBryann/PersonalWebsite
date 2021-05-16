// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../utils/dbConnect"

dbConnect();

export default (req, res) => {
  res.status(200).json({ name: 'test' })
}
