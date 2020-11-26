import React from "react";
import { Form } from './Form';
import { Comments } from "./Comments";
import { Card } from './Card'

export default function Dashboard() {
  return (
    <div className="container-md" align="center">
      <Card />
      <Form />
      <Comments />
    </div>
  )
}