import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportSubscribeComponent } from './export-subscribe.component';

describe('ExportSubscribeComponent', () => {
  let component: ExportSubscribeComponent;
  let fixture: ComponentFixture<ExportSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportSubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
