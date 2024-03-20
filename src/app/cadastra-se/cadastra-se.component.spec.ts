import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraSeComponent } from './cadastra-se.component';

describe('CadastraSeComponent', () => {
  let component: CadastraSeComponent;
  let fixture: ComponentFixture<CadastraSeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastraSeComponent]
    });
    fixture = TestBed.createComponent(CadastraSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
