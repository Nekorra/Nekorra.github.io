import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalsModalComponent } from './journals-modal.component';

describe('JournalsModalComponent', () => {
  let component: JournalsModalComponent;
  let fixture: ComponentFixture<JournalsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
