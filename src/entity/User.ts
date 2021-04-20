import { defaultCipherList } from "node:constants";
import  {  Entity ,  ObjectIdColumn ,  Column, ObjectID  }  from "typeorm" ;

@ Entity ( )
class  User  {

    @ObjectIdColumn()
    _id: ObjectID;

    @ Column ( ) 
    firstName : string ;

    @ Column ( ) 
    lastName : string ;

    @ Column ( ) 
    age : number ;

}
export default User