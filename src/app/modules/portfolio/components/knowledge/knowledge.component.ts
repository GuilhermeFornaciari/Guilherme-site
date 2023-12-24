import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/angular.ico',
      alt: 'Ícone de conhecimento de angular',
      href: 'https://angular.dev/',
    },
    {
      src: 'assets/icons/knowledge/node.png',
      alt: 'Ícone de conhecimento de nodejs',
      href: 'https://nodejs.org/en/about',
    },
    {
      src: 'assets/icons/knowledge/nestJS.svg',
      alt: 'Ícone de conhecimento de NestJS',
      href: 'https://nestjs.com/',
    },    {
      src: 'assets/icons/knowledge/django.png',
      alt: 'Ícone de conhecimento de Django',
      href: 'https://www.djangoproject.com/',
    },
    {
      src: 'assets/icons/knowledge/dotnet.png',
      alt: 'Ícone de conhecimento de DotNet',
      href: 'https://dotnet.microsoft.com/pt-br/',
    },    {
      src: 'assets/icons/knowledge/FastReport.png',
      alt: 'Ícone de conhecimento de FastReport',
      href: 'https://github.com/FastReports/FastReport'
    },
    {
      src: 'assets/icons/knowledge/Pandas.png',
      alt: 'Ícone de conhecimento de Pandas',
      href: 'https://pandas.pydata.org/'
    },
  ]);
}
