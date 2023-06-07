import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsModalComponent } from './publications-modal.component';

describe('PublicationsModalComponent', () => {
  let component: PublicationsModalComponent;
  let fixture: ComponentFixture<PublicationsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
