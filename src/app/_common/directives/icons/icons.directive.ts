import { Directive, ElementRef, Renderer2, Input, OnInit, inject, effect, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[foodOfferIcons]',
  standalone: true
})
export class IconsDirective implements OnInit {
  @Input() foodOfferIcons: string = "";

  private svgContent = signal<string | null>(null);
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);

  ngOnInit() {
    if (this.foodOfferIcons) {
      this.loadSvg(this.foodOfferIcons);
    }
  }

  private loadSvg(iconName: string): void {
    const svgPath = `/images/icon/${iconName}.svg`;

    this.http.get(svgPath, { responseType: 'text' }).subscribe({
      next: (content) => {
        this.svgContent.set(content);
        this.renderSvg();
      },
      error: (err) => {
        console.error(`Error loading SVG [${iconName}]:`, err);
      }
    });
  }

  private renderSvg(): void {
    const content = this.svgContent();
    if (!content) return;

    this.renderer.addClass(this.el.nativeElement, 'size-6');
    const sanitizedSvg = this.sanitizer.bypassSecurityTrustHtml(content) as string;
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', content as string);
  }
}
