import { Request, Response } from "express";
import { Route, Get, Post, Put, Delete, Options, Inject } from "../decorators";
import { UserRepository } from "../repository";

@Route('/user')
export class UserRoute {
  @Inject('userRepository') private user:UserRepository

  @Get('/')
  get (req: Request, res: Response) {
    res.send(this.user.getFullName())
  }

  @Get('/:id')
  getById (req: Request, res: Response) {
    const { id } = req.params
    res.send('hello user request :))' + id)
  }

  @Post('/')
  post (req: Request, res: Response) {
    res.send('Hello user request :))')
  }

  @Put('/')
  put (req: Request, res: Response) {
    res.send('Hello user request :))')
  }

  @Delete('/')
  delete (req: Request, res: Response) {
    res.send('Hello user request :))')
  }
  
  @Options('/')
  options (req: Request, res: Response) {
    res.send('Hello user request :))')
  }
}