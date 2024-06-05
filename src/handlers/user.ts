import { Request, Response } from "express";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "joy@email.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "Jane@email.com",
  },
  {
    id: 3,
    name: "James Doe",
    email: "james@email.com",
  },
];

export function getUsers(request: Request, response: Response) {
  response.json({
    data: users,
  });
}

export function getUserById(request: Request, response: Response) {
  const { id } = request.params;
  const user = users.find((user) => user.id === parseInt(id, 10));

  if (!user) {
    return response.status(404).json({
      error: "User not found",
    });
  }

  response.json({
    data: user,
  });
}
