import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid} from "uuid"

@Entity("users")
 class User {
     @PrimaryColumn()
     readonly id: string; //Define que pode apenas ser lido, ou seja, outra classe nao pode inserir ou alterar esse dado

     @Column()
     name: string;

     @Column()
     email: string;

     @Column()
     admin: boolean;

     @CreateDateColumn()
     created_at: Date;

     @UpdateDateColumn()
     updated_at: Date;

     constructor(){
         if(!this.id){
             this.id = uuid();
         }
     }

}
export { User };