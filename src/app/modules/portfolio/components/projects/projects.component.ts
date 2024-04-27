import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
     {
        src: 'assets/img/sosa.png',
        alt: 'SOSA',
        title: 'SOSA',
        with: '1020',
        height: '600',
        description: 'Esse projeto foi desenvolvido para a CAED do IFRO Campus Cacoal em colaboração com Julio César Aguiar, vide GitHub para mais informações',
        links: [
          {
            name: 'Conheça já',
            href: 'https://sosa-frontend.vercel.app/login',
          }
        ]
      },
      {
        src: 'assets/img/urflow.png',
        alt: 'UR-Flow',
        title: 'UR-Flow',
        with: '400',
        height: '720',
        description: 'Esse projeto foi desenvolvido para a CAED do IFRO Campus Cacoal em colaboração com Julio César Aguiar, vide GitHub para mais informações',
        links: [
          {
            name: 'Conheça já',
            href: 'https://ur-flow.vercel.app/login',
          }
        ]
      }
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
