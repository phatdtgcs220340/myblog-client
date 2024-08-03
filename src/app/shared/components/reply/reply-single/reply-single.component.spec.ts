import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplySingleComponent } from './reply-single.component';

describe('ReplySingleComponent', () => {
  let component: ReplySingleComponent;
  let fixture: ComponentFixture<ReplySingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplySingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
