import { comments } from "@/data/comments";

export default function handler(req, res) {
  if(req.method === 'GET'){
    res.status(200).json(comments)
  }
  else if(req.method === 'POST'){
    const comment = req.body.comment; //.body.comment refers to the property we set in the FrontEnd
    const newComment = {
      id: Date.now(),
      text: comment,
    }
    comments.push(newComment);
    res.status(201).json(newComment)
  }
};

