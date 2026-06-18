import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CurriculoService } from '../../../service/curriculo';
import { Curriculo } from '../../../model/curriculo.model';

@Component({
  selector: 'app-curriculo-form', //formulário para criar ou editar um currículo
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './curriculo-form.html',
  styleUrls: ['./curriculo-form.scss'],
})
export class CurriculoFormComponent implements OnInit {
  // Propriedade para o formulário se ligar e armazenar os dados do currículo
  curriculo: Curriculo = {
    nomeCompleto: '',
    email: '',
    telefone: '',
    formacao: '',
    experiencia: '',
    habilidades: [],
  };

  editando: boolean = false; // Indica se estamos editando um currículo existente ou criando um novo

  constructor(
    private service: CurriculoService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void { //verificar se existe um id na rota para determinar se é edição ou criação
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.editando = true;
      this.service.buscarPorId(Number(id)).subscribe(
        (res: Curriculo) => {
          this.curriculo = res;
        },
        (err: unknown) => console.error('Erro ao buscar currículo:', err),
      );
    }
  }

  salvar(): void { // método para salvar o currículo, seja criando ou editando
    if (this.editando) {
      const id = this.curriculo.id;
      if (id == null) {
        console.error('ID do currículo não informado para atualização.');
        return;
      }

      this.service.editar(id, this.curriculo).subscribe({
        next: () => this.router.navigate(['/curriculos']),
        error: (err: unknown) => console.error('Erro ao atualizar:', err),
      });
    } else {
      this.service.cadastrar(this.curriculo).subscribe({
        next: () => this.router.navigate(['/curriculos']),
        error: (err: unknown) => console.error('Erro ao salvar:', err),
      });
    }
  }
}
