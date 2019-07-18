import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'application-type-blog';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Saraceni tamen nec amici nobis umquam nec hostes optandi, ultro citroque discursantes quicquid inveniri poterat momento temporis parvi vastabant milvorum rapacium similes, qui si praedam dispexerint celsius, volatu rapiunt celeri, aut nisi impetraverint, non inmorantur.',
      loveIts: 52,
      created_at: new Date('2016-09-25 08:10')
    },
    {
      title: 'Mon deuxième post ',
      content: 'Et quia Montius inter dilancinantium manus spiritum efflaturus Epigonum et Eusebium nec professionem nec dignitatem ostendens aliquotiens increpabat, qui sint hi magna quaerebatur industria, et nequid ',
      loveIts: 0,
      created_at: new Date('2019-06-06 22:00')
    },
    {
      title: 'Mon troisième  post',
      content: 'Paphius quin etiam et Cornelius senatores, ambo venenorum artibus pravis se polluisse confessi, eodem pronuntiante Maximino sunt interfecti. pari sorte etiam procurator monetae extinctus est. Sericum enim et Asbolium supra dictos, quoniam cum hortaretur passim nominare, quos ',
      loveIts: 8,
      created_at: new Date('2019-05-14 17:30')
    },
    {
      title: 'Mon quatrième   post',
      content: 'Quod cum ita sit, paucae domus studiorum seriis cultibus antea celebratae nunc ludibriis ignaviae torpentis exundant, vocali sonu, perflabili tinnitu ',
      loveIts: -11,
      created_at: new Date('2019-07-05 15:45')
    }
    ,
    {
      title: 'Mon cinquième   post',
      content: 'intepesceret, Epigonus e Lycia philosophus ducitur et Eusebius ab Emissa Pittacas cognomento, concitatus orator, cum quaestor non hos sed tribunos fabricarum insimulasset promittentes armorum si novas res agitari conperissent.',
      loveIts: 32,
      created_at: new Date('2019-06-25 12:00')
    }
  ];
}
