import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  snapsTitle!: string;

  constructor(
    private FaceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.snapsTitle = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.FaceSnapsService.getFaceSnapById(faceSnapId);
  }
  onSnap() {
    if (this.snapsTitle === 'Oh Snap!') {
      this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snapsTitle = 'Oops, unSnap!';
    } else {
      this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapsTitle = 'Oh Snap!';
    }
  }
}
