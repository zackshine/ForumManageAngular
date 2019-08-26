import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerAddComponent } from './engineer-add.component';

describe('EngineerAddComponent', () => {
  let component: EngineerAddComponent;
  let fixture: ComponentFixture<EngineerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
