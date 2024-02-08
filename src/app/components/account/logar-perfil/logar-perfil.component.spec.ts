import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogarPerfilComponent } from './logar-perfil.component';

describe('LogarPerfilComponent', () => {
  let component: LogarPerfilComponent;
  let fixture: ComponentFixture<LogarPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogarPerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
