import { Injectable ,OnModuleInit,OnApplicationShutdown} from '@nestjs/common';


@Injectable()
export class DatabaseService {
    private isConnected = false;

    onModuleInit(){//when the module/service is initialized/loaded this method will be called
        // now if we want it to connect to database we can do it here
        this.isConnected = true;
        console.log('Database connected');
    }
    //nest js doesnt directly execute onapplicationshutdown dirextly we have to tell in main.ts file
    onApplicationShutdown(signal : string){//when the application is shutting down this method will be called
        //signal is the reason for shutdown like ctrl+c or or database server down
        this.isConnected = false;
        console.log(  `Database disconnected due to application shutdown Signal: ${signal}`);
        
    }
    getStatus(){
        return this.isConnected ? 'Database is connected' : 'Database is disconnected';
    }

}
