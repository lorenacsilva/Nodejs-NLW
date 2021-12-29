import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../repositories/TagsRepositories';

interface ITagRequest{
    name: string;
}

class CreateTagService{
    async execute({name}:ITagRequest){
        const tagsRepositories = getCustomRepository(TagsRepositories)

        if(!name) {
            throw new Error ("Incorrect name!");
        }

        // SELECT * FROM tags WHERE name = 'name'
        const tagAlredyExists = await tagsRepositories.findOne({
            name
        });

        if(tagAlredyExists){
            throw new Error ("Tag alredy exists!");
        }

        const tag = tagsRepositories.create({
            name
        });

        await tagsRepositories.save(tag);
        return tag;
    }
}

export {CreateTagService}