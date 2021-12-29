import { EntityRepository, Repository } from "typeorm";
import { User } from "../services/entities/User";
@EntityRepository(User)
class UsersRepositories extends Repository<User> {}

export {UsersRepositories}