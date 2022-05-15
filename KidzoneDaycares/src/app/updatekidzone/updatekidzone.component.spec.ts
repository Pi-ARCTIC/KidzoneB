import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatekidzoneComponent } from './updatekidzone.component';

describe('UpdatekidzoneComponent', () => {
  let component: UpdatekidzoneComponent;
  let fixture: ComponentFixture<UpdatekidzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatekidzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatekidzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
