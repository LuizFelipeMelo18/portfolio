import { TestBed } from '@angular/core/testing';
import { MediaPlayer } from './media-player';

describe('MediaPlayer', () => {
  it('plays the local files and shows only artist and title in the list', async () => {
    const play = vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue();
    const pause = vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
    const load = vi.spyOn(HTMLMediaElement.prototype, 'load').mockImplementation(() => {});
    try {
      await TestBed.configureTestingModule({ imports: [MediaPlayer] }).compileComponents();
      const fixture = TestBed.createComponent(MediaPlayer);
      fixture.detectChanges();
      const host = fixture.nativeElement as HTMLElement;
      const audio = host.querySelector('audio') as HTMLAudioElement;

      expect(host.querySelectorAll('.music-player__track').length).toBe(12);
      expect(host.querySelector('.music-player__track')?.textContent).toContain('Somewhere I Belong');
      expect(host.querySelector('.music-player__track')?.textContent).not.toContain('Meteora');
      expect(decodeURIComponent(audio.src)).toContain('Somewhere I Belong (Official Music Video) [4K UPGRADE] – Linkin Park.mp3');
      expect(host.querySelector<HTMLImageElement>('.music-player__cover')?.src).toContain('/covers/meteora.jpg');

      (host.querySelector('[aria-label="Papercut — Linkin Park"]') as HTMLButtonElement).click();
      fixture.detectChanges();
      expect(decodeURIComponent(audio.src)).toContain('Papercut [Official HD Music Video] - Linkin Park.mp3');

      (host.querySelector('[aria-label="Pixelated Kisses — Joji"]') as HTMLButtonElement).click();
      fixture.detectChanges();
      expect(host.querySelector('.music-player__now strong')?.textContent).toBe('Pixelated Kisses');
      expect(decodeURIComponent(audio.src)).toContain('Joji - PIXELATED KISSES.mp3');
      expect(play).toHaveBeenCalled();
      expect(pause).toHaveBeenCalled();
      expect(load).toHaveBeenCalled();

      (host.querySelector('[aria-label="Próxima faixa"]') as HTMLButtonElement).click();
      fixture.detectChanges();
      expect(host.querySelector('.music-player__now strong')?.textContent).toBe('Run');
      fixture.destroy();
    } finally {
      play.mockRestore();
      pause.mockRestore();
      load.mockRestore();
    }
  });
});
