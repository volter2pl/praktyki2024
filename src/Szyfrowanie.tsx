import * as fs from 'fs';


function Draw(){
    const Quotes = fs.readFileSync('./words.txt', 'utf-8');
    const QList = Quotes.split('\n')
    console.log(QList)
}
export default Draw();