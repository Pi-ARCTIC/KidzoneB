import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKidzoneComponent } from './create-kidzone.component';

describe('CreateKidzoneComponent', () => {
  let component: CreateKidzoneComponent;
  let fixture: ComponentFixture<CreateKidzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateKidzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKidzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
