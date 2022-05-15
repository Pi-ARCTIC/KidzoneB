import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsKidzoneComponent } from './details-kidzone.component';

describe('DetailsKidzoneComponent', () => {
  let component: DetailsKidzoneComponent;
  let fixture: ComponentFixture<DetailsKidzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsKidzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsKidzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
