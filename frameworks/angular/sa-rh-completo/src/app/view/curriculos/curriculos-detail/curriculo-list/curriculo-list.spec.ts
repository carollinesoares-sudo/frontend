import { ComponentFixture, TestBed } from '@angular/core/testing';

import * as CurriculoListModule from './curriculo-list';

// Try common export names (CurriculoList, CurriculoListComponent, default)
const CurriculoList: any = (CurriculoListModule as any).CurriculoList || (CurriculoListModule as any).CurriculoListComponent || (CurriculoListModule as any).default;

describe('CurriculoList', () => {
  let component: any;
  let fixture: ComponentFixture<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurriculoList],
    }).compileComponents();

    fixture = TestBed.createComponent(CurriculoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
