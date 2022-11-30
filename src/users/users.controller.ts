import { Body, Controller, Post } from '@nestjs/common';
import { UserLogin, UserModel } from './interfaces/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersServices: UsersService) { };

    @Post('/add')
    addNewUser(@Body() user: UserModel){
        return this.usersServices.addUser(user)
    }

    @Post('/check')
    checkCredentials(@Body() user: UserLogin){
        return this.usersServices.checkCredentials(user)
    }

}
