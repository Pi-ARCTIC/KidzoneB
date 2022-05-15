import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesubscribeComponent } from './updatesubscribe.component';

describe('UpdatesubscribeComponent', () => {
  let component: UpdatesubscribeComponent;
  let fixture: ComponentFixture<UpdatesubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
