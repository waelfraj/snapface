import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapsTitle!: string;

  constructor(
    private FaceSnapsService: FaceSnapsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.snapsTitle = 'Oh Snap!';
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

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}
}
