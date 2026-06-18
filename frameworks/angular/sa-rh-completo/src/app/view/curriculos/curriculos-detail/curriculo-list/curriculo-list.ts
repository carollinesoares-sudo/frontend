import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CurriculoService } from '../../../../service/curriculo';
import { Curriculo } from '../../../../model/curriculo.model';

@Component({ //componente para listar os currículos
  selector: 'app-curriculo-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './curriculo-list.html',
  styleUrls: ['./curriculo-list.scss'],
})
export class CurriculoListComponent implements OnInit { // Propriedade para armazenar a lista de currículos
  curriculos: Curriculo[] = [];

  constructor(private service: CurriculoService) {}

  ngOnInit(): void { // Carregar os currículos quando o componente for inicializado
    this.carregarCurriculos();
  }

  carregarCurriculos(): void { // método para carregar os currículos do serviço
    this.service.getCurriculos().subscribe({
      next: (dados) => {
        this.curriculos = dados as Curriculo[];
      },
      error: (err) => console.error('Erro ao listar currículos:', err),
    });
  }

  excluir(id: number): void { // método para excluir um currículo, confirmando a ação com o usuário
    if (confirm('Tem certeza que deseja excluir este currículo?')) {
      this.service.deleteCurriculo(id).subscribe({
        next: () => {
          this.curriculos = this.curriculos.filter((c) => c.id !== id);
        },
        error: (err) => console.error('Erro ao deletar:', err),
      });
    }
  }
}
