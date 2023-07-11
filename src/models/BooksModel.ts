import mongoose , {Schema , Document} from "mongoose";

export interface Book extends Document {
    bookName : string;
    writer : string; 
    price : number;
    publisher:string;
    createdBy : mongoose.Types.ObjectId;
    createdAt : Date;
}


const bookSchema: Schema = new Schema(
    {
      bookName: { type: String, required: true },
      writer : { type: String, required: true },
      price : { type: Number, required: true },
      publisher:{ type: String, },
      createdBy: { type: Schema.Types.ObjectId, ref: 'users', required: true },
      createdAt: { type: Date, default: Date.now },
    },
    { versionKey: false }
  );
  
  export const BooksModel = mongoose.model<Book>('books', bookSchema);