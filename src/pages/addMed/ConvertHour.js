
export default function(value){
    switch(value){
        case 'Once daily':
            return 1;
            break;

        case 'Twice daily':
        case 'Every 12 hours':
             return 2;
             break;

        case '3 times a day':
        case 'Every 8 hours':
             return 3;
             break;
        
        case '4 times a day':
        case 'Every 6 hours':
             return 4;
             break;

        case '5 times a day':
             return 5;
             break;

        case '6 times a day':
        case 'Every 4 hours':
             return 6;
             break;

        case '7 times a day':
             return 7;
             break;

        case '8 times a day':
        case 'Every 3 hours':
             return 8;
             break;

        case '9 times a day':
             return 9;
             break;

        case '10 times a day':
             return 10;
             break;

        case '11 times a day':
             return 11;
             break

        case '12 times a day':
        case 'Every 2 hours':
             return 12;
             break;
        case 'Every hour':
             return 24;
             break;


        default:
        return 1;
    }
}