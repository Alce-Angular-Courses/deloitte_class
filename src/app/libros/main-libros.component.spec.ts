import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLibrosComponent } from './main-libros.component';

describe('MainLibrosComponent', () => {
  let component: MainLibrosComponent;
  let fixture: ComponentFixture<MainLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
