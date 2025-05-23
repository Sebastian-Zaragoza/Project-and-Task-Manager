import mongoose from 'mongoose';

/*Try to connect with DataBase*/
export const connect_database = async () => {
    try{
        const connection = await mongoose.connect(process.env.DATABASE_URL)
        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log(`Connected to Database: ${url}`);
    }catch (error) {
        console.error(error);
        process.exit(1);
    }
}
