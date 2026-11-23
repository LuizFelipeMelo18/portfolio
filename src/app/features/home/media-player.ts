import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild, computed, input, signal } from '@angular/core';

interface Track {
  readonly title: string;
  readonly artist: string;
  readonly file: string;
  readonly cover: string;
}

const TRACKS: readonly Track[] = [
  { title: 'Somewhere I Belong', artist: 'Linkin Park', file: 'Somewhere I Belong (Official Music Video) [4K UPGRADE] – Linkin Park.webm', cover: 'meteora.jpg' },
  { title: 'Papercut', artist: 'Linkin Park', file: 'Papercut [Official HD Music Video] - Linkin Park.webm', cover: 'hybrid-theory.jpg' },
  { title: 'One Step Closer', artist: 'Linkin Park', file: 'One Step Closer.mp3', cover: 'hybrid-theory.jpg' },
  { title: 'Lying from You', artist: 'Linkin Park', file: 'Lying From You - Linkin Park (Meteora).mp3', cover: 'meteora.jpg' },
  { title: 'Pixelated Kisses', artist: 'Joji', file: 'Joji - PIXELATED KISSES.mp3', cover: 'pixelated-kisses.jpg' },
  { title: 'Run', artist: 'Joji', file: 'Joji - Run (Lyrics).mp3', cover: 'nectar.jpg' },
  { title: 'Change', artist: 'Deftones', file: 'Deftones - Change (In The House Of Flies) [Official Music Video].mp3', cover: 'white-pony.jpg' },
  { title: 'Fuel', artist: 'Metallica', file: 'Metallica - Fuel (Official Music Video).mp3', cover: 'reload.jpg' },
  { title: "Mama, I'm Coming Home", artist: 'Ozzy Osbourne', file: "OZZY OSBOURNE - _Mama, I'm Coming Home_ (Official Video).mp3", cover: 'no-more-tears.jpg' },
  { title: 'All I Wanted', artist: 'Paramore', file: 'Paramore - All I Wanted (Official Audio).mp3', cover: 'brand-new-eyes.jpg' },
  { title: 'Lonely Day', artist: 'System of a Down', file: 'System Of A Down - Lonely Day (Official HD Video).mp3', cover: 'hypnotize.jpg' },
  { title: 'Let It Happen', artist: 'Tame Impala', file: 'Tame Impala - Let It Happen (Official Audio).mp3', cover: 'currents.jpg' },
];

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.html',
  styleUrl: './media-player.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaPlayer implements AfterViewInit {
  @ViewChild('audio') private audio?: ElementRef<HTMLAudioElement>;

  readonly isPt = input(true);
  protected readonly tracks = TRACKS;
  protected readonly selectedIndex = signal(0);
  protected readonly playing = signal(false);
  protected readonly currentTime = signal(0);
  protected readonly duration = signal(0);
  protected readonly volume = signal(80);
  protected readonly playbackError = signal(false);
  protected readonly selectedTrack = computed(() => this.tracks[this.selectedIndex()]);
  protected readonly sourceUrl = computed(() => `/music/${encodeURIComponent(this.selectedTrack().file)}`);
  protected readonly coverUrl = computed(() => `/covers/${this.selectedTrack().cover}`);

  ngAfterViewInit(): void {
    const player = this.audio?.nativeElement;
    if (!player) return;
    player.src = this.sourceUrl();
    player.volume = this.volume() / 100;
    player.load();
  }

  protected selectTrack(index: number): void {
    const player = this.audio?.nativeElement;
    if (!player) return;
    this.selectedIndex.set(index);
    this.currentTime.set(0);
    this.duration.set(0);
    this.playbackError.set(false);
    player.pause();
    player.src = this.sourceUrl();
    player.load();
    void this.startPlayback();
  }

  protected togglePlayback(): void {
    const player = this.audio?.nativeElement;
    if (!player) return;
    if (player.paused) void this.startPlayback();
    else player.pause();
  }

  protected step(direction: -1 | 1): void {
    this.selectTrack((this.selectedIndex() + direction + this.tracks.length) % this.tracks.length);
  }

  protected seek(event: Event): void {
    const player = this.audio?.nativeElement;
    if (!player || !Number.isFinite(player.duration)) return;
    player.currentTime = Number((event.target as HTMLInputElement).value);
    this.currentTime.set(player.currentTime);
  }

  protected changeVolume(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.volume.set(value);
    if (this.audio) this.audio.nativeElement.volume = value / 100;
  }

  protected onLoadedMetadata(): void {
    const player = this.audio?.nativeElement;
    this.duration.set(player && Number.isFinite(player.duration) ? player.duration : 0);
    if (player) player.volume = this.volume() / 100;
  }

  protected onTimeUpdate(): void {
    this.currentTime.set(this.audio?.nativeElement.currentTime ?? 0);
  }

  protected onEnded(): void {
    this.step(1);
  }

  protected formatTime(seconds: number): string {
    const value = Number.isFinite(seconds) ? Math.floor(seconds) : 0;
    return `${Math.floor(value / 60)}:${(value % 60).toString().padStart(2, '0')}`;
  }

  private async startPlayback(): Promise<void> {
    try {
      await this.audio?.nativeElement.play();
      this.playbackError.set(false);
    } catch {
      this.playing.set(false);
      this.playbackError.set(true);
    }
  }
}
