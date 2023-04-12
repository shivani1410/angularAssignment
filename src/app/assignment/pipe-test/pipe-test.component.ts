import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css'],
})
export class PipeTestComponent {
  infinite = [
    { name: 'Sungkyu', position: 'Leader' },
    { name: 'Dongwoo', position: 'Rapper' },
    { name: 'Woohyun', position: 'Vocalist' },
    { name: 'Sungyeol', position: 'Vocalist' },
    { name: 'Myungsoo', position: 'Visual' },
    { name: 'SongJong', position: 'Maknae' },
  ];
  filterString=''
}
