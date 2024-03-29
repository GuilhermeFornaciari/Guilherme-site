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
        src: 'string',
        alt: 'SOSA',
        title: 'SOSA',
        with: '200',
        height: '600',
        description: 'Esse projeto foi desenvolvido para a CAED do IFRO Campus Cacoal em colaboração com Julio César Aguiar, vide GitHub para mais informações',
        links: [
          {
            name: 'SOSA',
            href: 'https://sosa-frontend.vercel.app/',
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
