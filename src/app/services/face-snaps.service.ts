import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn:'root'
})

export class FaceSnapsService{
  faceSnaps: FaceSnap[] = [
    {
      id:1,
      title: 'Proin eget tortor risus ?',
      description: 'Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
      imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/product/8364073/LINEStorePC/main.png;compress=true',
      createdDate : new Date(),
      snaps : 250522,
      location:'Paris'
    },
    {
      id:2,
      title: 'What is Lorem Ipsum?',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/product/5789604/LINEStorePC/main.png;compress=true',
      createdDate : new Date(),
      snaps : 45045000,
      location:'La montagne'
    },
    {
      id:3,
      title: 'Why do we use it?',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      imageUrl: 'https://stickershop.line-scdn.net/stickershop/v1/product/11926163/LINEStorePC/main.png;compress=true',
      createdDate : new Date(),
      snaps : 50250245
  },
  ]

  getAllFaceSnaps() : FaceSnap[]{
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: string): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
}
}

