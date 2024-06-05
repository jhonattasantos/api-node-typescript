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

export function createUser(request: Request, response: Response) {
  const { name, email } = request.body;
  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);

  response.status(201).json({
    data: newUser,
  });
}

export function updateUser(request: Request, response: Response) {
  const { id } = request.params;
  const { name, email } = request.body;

  const user = users.find((user) => user.id === parseInt(id, 10));

  if (!user) {
    return response.status(404).json({
      error: "User not found",
    });
  }

  user.name = name || user.name;
  user.email = email || user.email;

  response.json({
    data: user,
  });
}
