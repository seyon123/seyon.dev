// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ProjectItems } from "../../components/ProjectItems";

export default function handler(req, res) {
  res.status(200).json(ProjectItems)
}
