import {EntityRepository, Repository} from "typeorm"
import { Tag } from "../services/entities/Tag"

@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag>{}

export {TagsRepositories}