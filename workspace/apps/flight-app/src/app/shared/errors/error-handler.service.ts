import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {
    
    handleError(error: any): void {
        console.error('error in custom error handler:', error);
    }

constructor() { }

}