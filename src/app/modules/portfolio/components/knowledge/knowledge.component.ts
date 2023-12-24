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
    },
    {
      src: 'assets/icons/knowledge/node.png',
      alt: 'Ícone de conhecimento de nodejs',
    },
    {
      src: 'assets/icons/knowledge/nestJS.svg',
      alt: 'Ícone de conhecimento de NestJS',
    },    {
      src: 'assets/icons/knowledge/django.png',
      alt: 'Ícone de conhecimento de Django',
    },
    {
      src: 'assets/icons/knowledge/dotnet.png',
      alt: 'Ícone de conhecimento de DotNet',
    },    {
      src: 'assets/icons/knowledge/FastReport.png',
      alt: 'Ícone de conhecimento de FastReport',
    },
    {
      src: 'assets/icons/knowledge/Pandas.png',
      alt: 'Ícone de conhecimento de Pandas',
    },
  ]);
}
