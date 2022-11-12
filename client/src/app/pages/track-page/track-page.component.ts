import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { TrackFeature } from '../../data/track-feature';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {
	trackId:string;
	track:TrackData;
  album:AlbumData;
  artists:ArtistData[];
  audioFeatures:TrackFeature[];
  featureTypes = TrackFeature.FeatureTypes;

  constructor(private route: ActivatedRoute,private spotifyService:SpotifyService) { }

  ngOnInit() {
  	this.trackId = this.route.snapshot.paramMap.get('id');
  	//TODO: Inject the spotifyService and use it to get the track data and it's audio features
    this.spotifyService.getTrack(this.trackId).then((response)=>{
      this.track = response;
      this.artists = this.track.artists;
      this.album = this.track.album;
    });
    this.spotifyService.getAudioFeaturesForTrack(this.trackId).then((response)=>{
      this.audioFeatures = response;
    });
  }

}
