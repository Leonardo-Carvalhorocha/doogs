import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostarFotoComponent } from './postar-foto.component';

describe('PostarFotoComponent', () => {
  let component: PostarFotoComponent;
  let fixture: ComponentFixture<PostarFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostarFotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
