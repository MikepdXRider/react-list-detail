export default function consistentString(str){
    if ( !str || !str.length) return 'No Listed Affiliations... ';

    if (str.length <= 19) return str + '... ';

    if (str.length > 19) {
        const strArr = str.split('');
        const shortStrArr = strArr.slice(0, 20);
        const newStr = shortStrArr.join('');
        return newStr + '... ';
    }
}