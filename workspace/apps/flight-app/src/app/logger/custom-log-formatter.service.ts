import { Injectable } from '@angular/core';
import { LogFormatterService} from 'logger-lib';

@Injectable()
export class CustomLogFormatter implements LogFormatterService {
    
    format(message: string): string {
        let date = new Date();
        return `[${date.toISOString()}]: ${message}`;
    }


}