import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurriculoService } from '../../../service/curriculo';
import { Curriculo } from '../../../model/curriculo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curriculo-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curriculo-detail.html',
  styleUrls: ['./curriculo-detail.scss'],
})
export class CurriculoDetail implements OnInit { //exibir os detalhes do currículo
  curriculo!: Curriculo;

  constructor(
    private route: ActivatedRoute,
    private service: CurriculoService,
  ) {}

  ngOnInit(): void { //pegar o id do currículo 
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.buscarPorId(id).subscribe((data) => {
      this.curriculo = data;
    });
  }
}
