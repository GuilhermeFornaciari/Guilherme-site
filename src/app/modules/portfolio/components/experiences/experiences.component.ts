import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Mercado',
        p: 'Out 2020 - Jan - 2022',
      },
      text: '<p>Trabalhei enquanto estudava no Instituto Federal de Rondônia, realizando diversas atividades manuais conquistei a confiança do meu patrão, a ponto de conquistar o cargo da gerência temporária em 01/2022 durante o periodo de férias do mesmo.</p>'
    }
  ]);
}
